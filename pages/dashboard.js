import React from "react";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import SideBar from "../src/components/SideBar/SideBar";
import MainNavBar from "../src/components/MainNavBar/MainNavBar";


const Dashboard = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <MainNavBar />
        <div  className={styles.container}>
          <Typography>Hello! </Typography>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
