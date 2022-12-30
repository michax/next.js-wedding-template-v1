import styles from "./SideBar.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Divider, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../../../public/logo.svg";
import Image from "next/image";

const SideBar = () => {
  const [active, setActive] = useState(true);
  const [activeLink, setActiveLink] = useState("dashboard");
  console.log("activeLink", activeLink);
  console.log("active", active);
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        flex: 1,
        borderRight: "0.5px solid rgba(230, 227, 227)",
        minHeight: "100vh",
      }}
    >
      <div className={styles.top}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image height="50%" src={logo} alt="Logo" />
        </Box>
      </div>
      <Divider />
      <div className={styles.center}>
        <ul className={styles.navMenu}>
          <li className={styles.navItem} onClick={() => setActive(!active)}>
            <DashboardIcon sx={{ mr: "10px" }} />
            Dashboards
          </li>
          
          <ul className={`${styles.subMenu} ${active ? styles.active : ""}`}>
            <li
              className={`${styles.subItem} ${
                activeLink === "dashboard" ? styles.activeLink : ""
              }`}
            >
              <Link href="/dashboard" onClick={() => setActiveLink("dashboard")}>
                Invitations
              </Link>
            </li>
            <li
              className={`${styles.subItem} ${
                activeLink === "summary-drinks" ? styles.activeLink : ""
              }`}
            >
              <Link
                href="summary-drinks"
                onClick={() => setActiveLink("summary-drinks")}
              >
                Summary Drinks
              </Link>
            </li>
            <li
              className={`${styles.subItem} ${
                activeLink === "summary-food" ? styles.activeLink : ""
              }`}
            >
              <Link
                href="summary-food"
                onClick={() => setActiveLink("summary-food")}
              >
                Summary Food Allergy
              </Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className={styles.bottom}></div>
    </Box>
  );
};

export default SideBar;
