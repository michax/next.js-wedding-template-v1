import React from 'react'
import SideBar from '../src/components/SideBar/SideBar'
import MainNavBar from '../src/components/MainNavBar/MainNavBar'
import { Typography } from '@mui/material'
import styles from "../styles/Home.module.css";

const SummaryDrinks = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <MainNavBar />
        <div  className={styles.container}>
          <Typography> Summary Drinks </Typography>
        </div>
      </div>
    </div>
  )
}

export default SummaryDrinks
