import React from "react";
import { Divider } from "@mui/material";
import styles from "./LogoTop.module.css";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Box } from "@mui/system";

const LogoTop = () => {
  return (
    <div className={styles.top}>
      <Box sx={{ height: "auto" }}>
        <div className={styles.subtop}>
          {" "}
          <Image height={50} className={styles.logo} src={logo} alt="Logo" />
        </div>
        <Divider />
      </Box>
    </div>
  );
};

export default LogoTop;
