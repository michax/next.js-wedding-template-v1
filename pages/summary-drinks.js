import connectPromise from "../lib/mongodb";
import React, { useEffect,useState } from "react";
import { Grid, Typography } from "@mui/material";
import PieChartDrinks from "../src/components/PieChartDrinks/PieChartDrinks";
import styles from "../styles/Home.module.css";
import { ErrorMessage } from "../src/components/ErrorMessage/ErrorMessage";
import SideBarDetails from "../src/components/SideBarDetails/SideBarDetails";
import NavBarDetails from "../src/components/NavBarDetails/NavBarDetails";
import { getCookie } from "cookies-next";

const SummaryDrinks = ({ data, error }) => {
  const [userDataDrinks, setUserDataDrinks] = useState([]);
  
  const vodkaAmount = data.filter((person) => {
    return person.isVodka === true;
  });
  const ginAmount = data.filter((person) => {
    return person.isGin === true;
  });
  const whiskyAmount = data.filter((person) => {
    return person.isWhisky === true;
  });
  const beerAmount = data.filter((person) => {
    return person.isBeer === true;
  });
  const isNonAlcoholAmount = data.filter((person) => {
    return person.isNonAlcohol === true;
  });

  useEffect(() => {
    setUserDataDrinks([
      {
        id: 1,
        drink: "Vodka cocktails",
        userGain: vodkaAmount.length,
      },
      {
        id: 2,
        drink: "Gin cocktails",
        userGain: ginAmount.length,
      },
      {
        id: 3,
        drink: "Whisky cocktails",
        userGain: whiskyAmount.length,
      },
      {
        id: 4,
        drink: "Beer",
        userGain: beerAmount.length,
      },
      {
        id: 5,
        drink: "non-alcoholic cocktail",
        userGain: isNonAlcoholAmount.length,
      },
    ]);
  }, [
    vodkaAmount.length,
    ginAmount.length,
    whiskyAmount.length,
    beerAmount.length,
    isNonAlcoholAmount.length,
  ]);

  const userData = {
    labels: userDataDrinks?.map((data) => data?.drink),
    datasets: [
      {
        label: "Users Gained",
        data: userDataDrinks?.map((data) => data?.userGain),
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

  console.log("userDataDrink", userDataDrinks);
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
        <div className={styles.home}>
          <SideBarDetails />
          <div className={styles.homeContainer}>
            <NavBarDetails />
            <div style={{ color: "#494949" }} className={styles.container}>
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  mt: 1,
                  textAlign: "left",
                }}
              >
                Overview of Wedding Guests&apos; Drink Preferences
              </Typography>
              <Grid container spacing={3}>
                <PieChartDrinks
                  userData={userData}
                  vodkaAmount={vodkaAmount}
                  ginAmount={ginAmount}
                  whiskyAmount={whiskyAmount}
                  beerAmount={beerAmount}
                  isNonAlcoholAmount={isNonAlcoholAmount}
                />
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SummaryDrinks;

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
