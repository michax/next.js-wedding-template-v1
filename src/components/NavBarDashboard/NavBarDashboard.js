import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import NoFoodIcon from "@mui/icons-material/NoFood";

const drawerWidth = 240;

const NavBarDashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  function handleClick(page) {
    setActiveLink(page);
    router.push(page);
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#FFF", height: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem ",
        }}
      >
        <Image height="50%" src={logo} alt="Logo" />
      </Box>
      <Divider />

      <TreeView
        sx={{ textAlign: "left", mt: "10px", ml: "10px" }}
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["1"]}
      >
        <TreeItem s nodeId="1" label="Summary">
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          backgroundColor:"#FFF"
        }}
      >
        <Box
          sx={{
            padding: "0 20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: "#212B36" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div>
            <div>
              <Button variant="contained">Download PDF</Button>
            </div>
          </div>
        </Box>
      </Box>
      <Divider  />
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
1;
export default NavBarDashboard;
