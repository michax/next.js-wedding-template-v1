import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import SideBar from "../src/components/SideBar/SideBar";
import { Grid, Typography } from "@mui/material";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";
import BarChartFoodAllergy from "../src/components/BarChartFoodAllergy/BarChartFoodAllergy";

const SummaryFoodAllergy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard />
        <div className={styles.container}>
          <Grid container spacing={3}>
            <BarChartFoodAllergy
              userDataFoodAllergy={userDataFoodAllergy}
              peanutsPeopleAllergies={peanutsPeopleAllergies}
              eggsPeopleAllergies={eggsPeopleAllergies}
              nutsPeopleAllergies={nutsPeopleAllergies}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SummaryFoodAllergy;
