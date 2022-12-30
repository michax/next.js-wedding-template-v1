import React from "react";
import styles from "../styles/Home.module.css";
import SideBar from "../src/components/SideBar/SideBar";
import { Typography } from "@mui/material";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";

const SummaryFoodAllergy = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard />
        <div className={styles.container}>
          <Typography> Summary Food Allergy</Typography>
        </div>
      </div>
    </div>
  );
};

export default SummaryFoodAllergy;
