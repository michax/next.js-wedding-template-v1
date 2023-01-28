import React from "react";
import styles from "./SubMenu.module.css";
import Link from "next/link";
import { MenuItem } from "@mui/material";

const SubMenu = ({ subMenuItems, currentRoute, foundSubMenuItems }) => {
  return (
    <>
      {foundSubMenuItems && (
        <ul className={`${styles.subMenu}  `}>
          {subMenuItems.map((item, indexSubMenuItems) => (
            <Link
              key={indexSubMenuItems}
              href={item.href}
              className={currentRoute === item.href ? styles.activeLink : ""}
            >
              <MenuItem
                sx={{
                  fontSize: "14px",
                  ml: "17px",
                  fontWeight: currentRoute === item.href ? "bold" : "normal",
                }}
              >
                {item.label}
              </MenuItem>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubMenu;
