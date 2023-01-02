import React, { useState, useEffect } from "react";
import SideBar from "../src/components/SideBar/SideBar";
import { Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";
import PieChartDrinks from "../src/components/PieChartDrinks/PieChartDrinks";

const SummaryDrinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDataDrinks, setUserDataDrinks] = useState([]);

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
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard />
        <div className={styles.container}>
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
  );
};

export default SummaryDrinks;
