import React from "react";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import SideBar from "../src/components/SideBar/SideBar";
import NavBarDashboard from "../src/components/NavBarDashboard/NavBarDashboard";


const Dashboard = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard />
        <div className={styles.container}>
          <Typography>Hello! </Typography>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
