import connectPromise from "../lib/mongodb";
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BarChartFoodAllergy from "../src/components/Charts/BarChartFoodAllergy/BarChartFoodAllergy";
import { ErrorMessage } from "../src/components/Labels/ErrorMessage/ErrorMessage";
import { getCookie } from "cookies-next";
import LayoutDashboardDesktop from "../src/components/Layouts/LayoutDashboardDesktop/LayoutDashboardDesktop";

const SummaryFoodAllergy = ({ data, error }) => {
  const [userDataAllergyFood, setUserDataAllergyFood] = useState([]);

  const peanutsPeopleAllergies = data?.filter((person) => {
    return person.isPeanuts === true;
  });
  const eggsPeopleAllergies = data?.filter((person) => {
    return person.isEggs === true;
  });
  const nutsPeopleAllergies = data?.filter((person) => {
    return person.isNuts === true;
  });

  useEffect(() => {
    setUserDataAllergyFood([
      {
        id: 1,
        food: "Peanuts",
        userGain: peanutsPeopleAllergies?.length,
      },
      {
        id: 2,
        food: "Egg",
        userGain: eggsPeopleAllergies?.length,
      },
      {
        id: 3,
        food: "Nuts",
        userGain: nutsPeopleAllergies?.length,
      },
    ]);
  }, [
    peanutsPeopleAllergies?.length,
    eggsPeopleAllergies?.length,
    nutsPeopleAllergies?.length,
  ]);

  const userDataFoodAllergy = {
    labels: userDataAllergyFood?.map((data) => data?.food),
    datasets: [
      {
        label: "Food Allergy",
        data: userDataAllergyFood?.map((data) => data?.userGain),
        backgroundColor: [
          "rgba(155, 199, 232, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(155, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(155, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(155, 199, 232, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(155, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(155, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {error?.status === 500 ? (
        <ErrorMessage message="Sorry, there was a problem with the server. Please try again later." />
      ) : error?.status === 400 ? (
        <ErrorMessage message="Sorry, there was a problem with your request. Please try again later." />
      ) : error ? (
        <ErrorMessage message="Sorry, there was a problem fetching the data. Please try again later." />
      ) : data === null ? (
        <ErrorMessage message="No data found." />
      ) : (
        <LayoutDashboardDesktop>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              mt: 1,
              textAlign: "left",
            }}
          >
            Summary of Wedding Guests&apos; Food Allergies
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <BarChartFoodAllergy
              userDataFoodAllergy={userDataFoodAllergy}
              peanutsPeopleAllergies={peanutsPeopleAllergies}
              eggsPeopleAllergies={eggsPeopleAllergies}
              nutsPeopleAllergies={nutsPeopleAllergies}
            />
          </Box>
        </LayoutDashboardDesktop>
      )}
    </>
  );
};

export default SummaryFoodAllergy;

export async function getServerSideProps({ req, res }) {
  const session = getCookie("session", { req, res });

  if (!session) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
    return { props: {} };
  }
  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = await client.isConnected();

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    // Fetch data from MongoDB
    const db = client.db("testwedingdatabase");
    const collection = db.collection("userlist");
    const data = await collection.find({}).toArray();

    if (!data || !data.length) {
      return { props: { error: { status: 400 } } };
    }

    // to fix error serialized to JSON, MongoDB return _id property as object not STRING
    const jsonData = data.map((item) => {
      item._id = item._id.toString();
      return item;
    });

    return { props: { data: jsonData } };
  } catch (error) {
    console.error(error);
    return { props: { error: { status: 500 } } };
  }
}
