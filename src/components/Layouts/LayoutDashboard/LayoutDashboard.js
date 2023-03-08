import React from "react";
import styles from "./LayoutDashboard.module.css";
import SideBarDetails from "../../SideBars/SideBarDetails/SideBarDetails";
import NavBarDetails from "../../NavBars/NavBarDetails/NavBarDetails";

const LayoutDashboard = ({ children }) => {
  return (
    <div className={styles.home}>
      <SideBarDetails />
      <div className={styles.homeContainer}>
        <NavBarDetails />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
