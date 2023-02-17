import React from "react";
import styles from "./NavMenuSidebar.module.css";
import { Typography } from "@mui/material";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
import { useRouter } from "next/router";
import PopperSubMenu from "../PopperSubMenu/PopperSubMenu";
import SubMenu from "../SubMenu/SubMenu";

const NavMenuSidebar = ({ title, icon, subMenuItems, isSmallScreen }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  //hook to create a popover that stays open when the mouse is hovering over it
  const popupState = usePopupState({
    variant: "popper",
    popupId: "demoPopper",
  });

  //item.href is not matches the format of the currentRoute variable.

  //submenu items where the current route starts with the submenu item href
  const foundSubMenuItems = subMenuItems.find((item) => {
    // console.log("item.href", item.href);
    // console.log("currentRoute here", cleanCurrentRoute);
    return currentRoute.startsWith(item.href);
  });

  const handleClickMainTitleOfSubMenu = () => {
    // Redirect to the first submenu item
    const firstSubMenuItem = subMenuItems[0];
    router.push(firstSubMenuItem.href);
    popupState.close();
  };

  return (
    <ul className={styles.navMenu}>
      <Typography
        {...bindHover(popupState)}
        component="li"
        variant="body1"
        className={styles.navItem}
        onClick={handleClickMainTitleOfSubMenu}
      >
        {icon}
        {title}
      </Typography>

      {isSmallScreen ? (
        ""
      ) : (
        <PopperSubMenu
          popupState={popupState}
          subMenuItems={subMenuItems}
          currentRoute={currentRoute}
          foundSubMenuItems={foundSubMenuItems}
        />
      )}



      <SubMenu
        subMenuItems={subMenuItems}
        foundSubMenuItems={foundSubMenuItems}
        currentRoute={currentRoute}
      />
    </ul>
  );
};

export default NavMenuSidebar;
