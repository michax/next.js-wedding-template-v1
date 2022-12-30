import styles from "./SideBar.module.css";
import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import NoFoodIcon from "@mui/icons-material/NoFood";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  function handleClick(page) {
    setActiveLink(page);
    router.push(page);
  }

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
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={["1"]}
        >
          <TreeItem nodeId="1" label="Summary">
            <TreeItem
              icon={<MarkAsUnreadIcon />}
              nodeId="2"
              label="Invitations"
              selected={activeLink === "/dashboard"}
              onClick={() => handleClick("/dashboard")}
            />
            <TreeItem
              icon={<LocalBarIcon />}
              nodeId="3"
              label="Summary Drinks"
              onClick={() => handleClick("/summary-drinks")}
              selected={activeLink === "/summary-drinks"}
            />
            <TreeItem
              icon={<NoFoodIcon />}
              nodeId="4"
              label="Summary Food Allergy"
              onClick={() => handleClick("/summary-food")}
              selected={activeLink === "/summary-food"}
            />
          </TreeItem>
        </TreeView>
      </div>
      <div className={styles.bottom}></div>
    </Box>
  );
};

export default SideBar;
