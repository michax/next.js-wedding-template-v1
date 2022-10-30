import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import CardDataSummary from "../src/components/CardDataSummary/CardDataSummary";

const amountPeople = 100;

export default function Summary({ isConnected }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //start loading when data is fetched
    setLoading(true);

    async function getData() {
      const response = await fetch("/api/get-data");
      const responseData = await response.json();
      console.log("clickHandler", { responseData });

      const all = responseData.all;
      console.log("all", { all });
      setData(all);

      //stop loading when data is fetched
      setLoading(false);
    }

    getData();
  }, []);

  console.log(data);

  // How many people is coming
  const confirmedPeople = data.filter((person) => {
    return person.isComing === "Yes";
  });

  console.log("confirmedPeople", confirmedPeople.length);

  // How many people is not coming
  const amountNotComingPeople = data.filter((person) => {
    return person.isComing === "No";
  });

  // waiting for answer
  const amountPendingPeople =
    amountPeople -
    Number(confirmedPeople.length) -
    Number(amountNotComingPeople.length);

  const nutsAllergy = data.filter((person) => {
    return person.isNuts === true;
  });

  console.log("nutsAllergy", nutsAllergy);
  return (
    <div>
      {/* {data.map((person) => {
                return (
                    <div key={person.id}>
                        <p>{person.firstName}</p>
                    </div>
                )

            })} */}

      <Box
        sx={{
          // height: "100vh",
          pt: "5rem",
          pb: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              mb: 5,
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "1.9rem" }
            }}
          >
            Summary of your guest wedding invitations
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CardDataSummary
                title="Confirmed"
                total={confirmedPeople.length}
                icon={"akar-icons:people-group"}
                colorIcon="#20A4F3"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardDataSummary
                title="Not Coming"
                total={amountNotComingPeople.length}
                color="info"
                icon={"emojione-monotone:no-pedestrians"}
                colorIcon="#011627"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardDataSummary
                title="Children"
                total={5}
                color="warning"
                icon={"ic:round-child-care"}
                colorIcon="#2ec4b6"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardDataSummary
                title={"Pending"}
                total={amountPendingPeople}
                color="error"
                icon={"ic:baseline-pending-actions"}
                colorIcon="#FF3366"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  // Connect with MongoDB
  const client = await clientPromise;
  console.log("[debug] IndexPage. Connected to mongo db");
  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
