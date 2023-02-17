import React from "react";
import styles from "./PopperSubMenu.module.css";
import Link from "next/link";
import { Paper } from "@mui/material";
import { bindPopper } from "material-ui-popup-state/hooks";
import Popper from "@mui/material/Popper";
import { MenuItem } from "@mui/material";

function PopperSubMenu({
  popupState,
  subMenuItems,
  currentRoute,
  foundSubMenuItems,
}) {
  if (foundSubMenuItems) {
    return null;
  }

  return (
    <Popper {...bindPopper(popupState)} placement="right-start">
      <Paper
        sx={{

          pt: "10px",
          pb: "10px",
          pr: "20px",
          pl: "20px",
          boxShadow: 3,
  
        }}
      >
        <ul className={`${styles.subMenuPopover} `}>
          {subMenuItems.map((item, indexSubMenuPopover) => {
            return (
              <Link
                key={indexSubMenuPopover}
                href={item.href}
                className={currentRoute === item.href ? styles.activeLink : ""}
              >
                <MenuItem sx={{ fontSize: "14px" }}> {item.label}</MenuItem>
              </Link>
            );
          })}
        </ul>
      </Paper>
    </Popper>
  );
}

export default PopperSubMenu;
