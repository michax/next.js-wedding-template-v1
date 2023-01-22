import React from "react";
import styles from "../../../styles/Home.module.css";
import SideBar from "../SideBar/SideBar";
import NavBarDashboard from "../NavBarDashboard/NavBarDashboard";

const LayoutDashboard = ({ children,generatePDF }) => {
  return (
    <div className={styles.home}>
      <SideBar />
      <div className={styles.homeContainer}>
        <NavBarDashboard generatePDF={generatePDF} />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
