import styles from "./CommonSidebar.module.css";
import React from "react";
import { Divider } from "@mui/material";
import LogoTop from "../LogoTop/LogoTop";

const CommonSidebar = ({ children, subTop }) => {
  return (
    <div className={styles.sidebar}>
      <LogoTop />


      <div className={styles.center}>{children}</div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default CommonSidebar;
