import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import NavLinksLeft from "./NavLinksLeft";
import NavLinksRight from "./NavLinksRight";
import Logo from "./Logo";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import NavItemMobile from "./NavItemMobile";

const drawerWidth = 240;

export const NavbarLandingPage = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#FCFFF7", height: "100%",    padding: ".5rem ", }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem ",
        }}
      >
        <Image height="50%" src={logo} alt="Logo" />
      </Box>
      <Divider />
      <List sx={{mt:"1rem"}}>
        <NavItemMobile />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
          backgroundColor: "#FCFFF7",
          overflow: "hidden",
          position: "fixed",
          top: "0",
          width: "100%",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ width: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <NavLinksLeft />
              </Box>
              <Logo />
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <NavLinksRight />
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "none" },
                color: "#212B36",
                textDecoration: "none",
                borderBottom: "2px solid transparent",
                ":hover": {
                  borderBottomColor: "#f2779ad6",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="left"
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
    </Box>
  );
};


