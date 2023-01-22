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
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PersonOffIcon from "@mui/icons-material/PersonOff";

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
        backgroundColor: "#212B36",
        color: "#FFF",
      }}
    >
      <div className={styles.top}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

          }}
        >
          <Image height="60%" src={logo} alt="Logo" />
        </Box>
      </div>
      <Divider />
    
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={["1"]}
          sx={{ textAlign: "left", mt: "50px", ml: "10px" }}
        >
          <TreeItem nodeId="1" label="Summary">
            <TreeItem
              icon={<MarkAsUnreadIcon />}
              nodeId="2"
              label="Invitations"
              selected={activeLink === "/invitations"}
              onClick={() => handleClick("/invitations")}
            />
            <TreeItem
              icon={<LocalBarIcon />}
              nodeId="3"
              label="Drinks"
              onClick={() => handleClick("/summary-drinks")}
              selected={activeLink === "/summary-drinks"}
            />
            <TreeItem
              icon={<NoFoodIcon />}
              nodeId="4"
              label="Food Allergy"
              onClick={() => handleClick("/summary-food")}
              selected={activeLink === "/summary-food"}
            />
          </TreeItem>
        </TreeView>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={["1"]}
          sx={{ textAlign: "left", mt: "30px", ml: "10px" }}
        >
          <TreeItem nodeId="1" label="Guests ">
            <TreeItem
              icon={<EmojiPeopleIcon />}
              nodeId="2"
              label="Confirmed guests"
              selected={activeLink === "/confirmed-guest"}
              onClick={() => handleClick("/confirmed-guest")}
            />
            <TreeItem
              icon={<PersonOffIcon />}
              nodeId="3"
              label="Guests Who Will Not Attend"
              selected={activeLink === "/guests-not-attend"}
              onClick={() => handleClick("/guests-not-attend")}
            />
          </TreeItem>
        </TreeView>

      <div className={styles.bottom}></div>
    </Box>
  );
};

export default SideBar;
