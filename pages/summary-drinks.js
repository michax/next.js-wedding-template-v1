import React from "react";
import SideBar from "../src/components/SideBar/SideBar";

import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";

const SummaryDrinks = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard/>
        <div className={styles.container}>
          <Typography> Summary Drinks </Typography>
        </div>
      </div>
    </div>
  );
};

export default SummaryDrinks;
