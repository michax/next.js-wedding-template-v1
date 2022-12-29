import React from 'react'
import styles from "../styles/Home.module.css";
import SideBar from '../src/components/SideBar/SideBar';
import MainNavBar from '../src/components/MainNavBar/MainNavBar';
import { Typography } from '@mui/material';

const SummaryFoodAllergy = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <MainNavBar />
        <div  className={styles.container}>
          <Typography> Summary Food Allergy</Typography>
        </div>
      </div>
    </div>
  )
}

export default SummaryFoodAllergy
