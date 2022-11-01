import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";
import { BarChart } from "../src/components/BarChart/BarChart";
import CardDataSummary from "../src/components/CardDataSummary/CardDataSummary";
import { PieChart } from "../src/components/PieChart/PieChart";

const amountPeople = 100;

export default function Summary({ isConnected }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDataDrinks, setUserDataDrinks] = useState([]);
  const [userDataAllergyFood, setUserDataAllergyFood] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      const response = await fetch("/api/get-data");
      const responseData = await response.json();
      const all = responseData.all;
      setData(all);
      setLoading(false);
    }

    getData();
  }, []);

  console.log("data featch", data);

  // How many people is coming who answer Yes
  const confirmedPeople = data.filter((person) => {
    return person.isComing === "Yes";
  });

  // How many people is coming plus with extra person
  const confirmedPeopleWhoComingAndWithExtraPerson = data.filter((person) => {
    return person.isWithCompanion === true && person.isComing === "Yes";
  });

  // console.log("extra", confirmedPeopleWhoComingAndWithExtraPerson);

  const confirmedPeopleWhoComingAlone = data.filter((person) => {
    return person.isWithCompanion === false && person.isComing === "Yes";
  });

  // console.log("coming but alone", confirmedPeopleWhoComingAlone);

  // How many people is not coming
  const amountNotComingPeople = data.filter((person) => {
    return person.isComing === "No";
  });

  const amountConfirmedPeopleWhoComingAloneOrWithExtraPerson =
    Number(confirmedPeopleWhoComingAndWithExtraPerson.length * 2) +
    Number(confirmedPeopleWhoComingAlone.length);

  // waiting for answer
  const amountPendingPeople =
    amountPeople -
    Number(confirmedPeople.length) -
    Number(amountNotComingPeople.length);

  //====================================================================================================
  //drinks
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
  // =================================================================================
  // FOOD
  const peanutsPeopleAllergies = data.filter((person) => {
    return person.isPeanuts === true;
  });
  const eggsPeopleAllergies = data.filter((person) => {
    return person.isEggs === true;
  });
  const nutsPeopleAllergies = data.filter((person) => {
    return person.isNuts === true;
  });

  useEffect(() => {
    setUserDataAllergyFood([
      {
        id: 1,
        food: "Peanuts",
        userGain: peanutsPeopleAllergies.length,
      },
      {
        id: 2,
        food: "Egg",
        userGain: eggsPeopleAllergies.length,
      },
      {
        id: 3,
        food: "Nuts",
        userGain: nutsPeopleAllergies.length,
      },
    ]);
  }, [
    peanutsPeopleAllergies.length,
    eggsPeopleAllergies.length,
    nutsPeopleAllergies.length,
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

  // Number of Children under  3

  return (
    <div>
      {loading ? (
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            textAlign: "center",
          }}
        >
          Loading...
        </Typography>
      ) : (
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
              variant="h3"
              sx={{
                mb: 5,
                textAlign: "center",
              }}
            >
              Summary of your guest wedding invitations
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Confirmed"
                  subTitle="Total number of adults who are coming"
                  total={amountConfirmedPeopleWhoComingAloneOrWithExtraPerson}
                  icon={"akar-icons:people-group"}
                  colorIcon="#20A4F3"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Not Coming"
                  subTitle="Total number of adults who are not coming"
                  total={amountNotComingPeople.length}
                  color="info"
                  icon={"emojione-monotone:no-pedestrians"}
                  colorIcon="#011627"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Children"
                  subTitle="Total number of children under 3 years old"
                  total={5}
                  color="warning"
                  icon={"ic:round-child-care"}
                  colorIcon="#2ec4b6"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title="Children"
                  subTitle="Total number of children over 3 years old"
                  total={5}
                  color="warning"
                  icon={"ic:round-child-care"}
                  colorIcon="#2ec4b6"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <CardDataSummary
                  title={"Pending"}
                  subTitle="Number of invitations not answered"
                  total={amountPendingPeople}
                  color="error"
                  icon={"ic:baseline-pending-actions"}
                  colorIcon="#FF3366"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: "3rem" }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    py: 6,
                    boxShadow: "5px",
                    textAlign: "center",
                    backgroundColor: "#FDFDEC",
                  }}
                >
                  <PieChart
                    chartData={userData}
                    vodkaAmount={vodkaAmount.length}
                    ginAmount={ginAmount.length}
                    whiskyAmount={whiskyAmount.length}
                    beerAmount={beerAmount.length}
                    isNonAlcoholAmount={isNonAlcoholAmount.length}
                  />
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    py: 6,
                    boxShadow: "5px",
                    textAlign: "center",
                    backgroundColor: "#FDFDEC",
                  }}
                >
                  <BarChart
                    chartData={userDataFoodAllergy}
                    peanutsPeopleAllergies={peanutsPeopleAllergies.length}
                    eggsPeopleAllergies={eggsPeopleAllergies.length}
                    nutsPeopleAllergies={nutsPeopleAllergies.length}
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // Connect with MongoDB
  const client = await clientPromise;

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
