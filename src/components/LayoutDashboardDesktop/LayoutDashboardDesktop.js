import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import SideBarDetails from "../SideBarDetails/SideBarDetails";
import { Button, SwipeableDrawer, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: "100%",

    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function LayoutDashboardDesktop({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [drawerTemporary, setDrawerTemporary] = useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
    setDrawerTemporary(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrawerTemporary(false);
  };

  const getDrawerVariant = (isSmallScreen, drawerTemporary) => {
    switch (true) {
      case isSmallScreen && drawerTemporary:
        return "temporary";
      case isSmallScreen && !drawerTemporary:
        return "persistent";
      default:
        return "persistent";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#FFF",
          boxShadow: "none",
          borderBottom: "1px solid #ECEFF1",
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              color="inherit"
              aria-label={open ? "close drawer" : "open drawer"}
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: "primary.main",
                mr: 2,

                ...(open && { display: "none" }),
              }}
            >
              <Typography variant="h6" noWrap color="primary">
                {open ? "Close Menu" : "Open Menu"}
              </Typography>
            </Button>
          </Box>
          <NavBarDetails
            hideBreadcrumbs={isSmallScreen && drawerTemporary}
            isSmallScreen={isSmallScreen}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={getDrawerVariant(
          isSmallScreen,
          drawerTemporary
        )}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Button onClick={handleDrawerClose}>
            {theme.direction === "ltr" && (
              <Typography variant="h6" noWrap color="primary">
                {open ? "Close Menu" : "Open Menu"}
              </Typography>
            )}
          </Button>
        </DrawerHeader>
        <Divider />
        <SideBarDetails  isSmallScreen={isSmallScreen} />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
