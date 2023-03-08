import React from "react";
import styles from "./MobileLayoutDashboard.module.css";

import MobileNavBarDetails from "../../NavBars/MobileNavBarDetails/MobileNavBarDetails";
import MobileSideBarDetails from "../../SideBars/MobileSideBarDetails/MobileSideBarDetails";

const MobileLayoutDashboard = ({ children }) => {
  return (
    <div className={styles.container}>
      <MobileSideBarDetails />
      <div className={styles.home}>
        <MobileNavBarDetails />
        <div className={styles.homeContainer}>{children}</div>
      </div>
    </div>
  );
};

export default MobileLayoutDashboard;
