import * as React from "react";
import Divider from "@mui/material/Divider";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: 60,
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    backgroundColor: "rgba(255, 255, 255, 0.929)",
    [theme.breakpoints.down("xs")]: {
      height: 40,
      fontSize: 12,
    },
  },
  wrapper: {
    padding: "0 20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
  },
}));

const drawerWidth = 240;

const navItemsRight = ["When", "Our Story", "Our Memories"];

const MainNavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const classes = useStyles();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#FCFFF7", height: "100%" }}
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
      
      <List>
        {navItemsRight.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Typography
                key={item}
                component="a"
                href={`#${item}`}
                variant="p"
                sx={{ display: { sm: "block", md: "none" } }}
              >
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className={classes.navbar}>
        <Box className={classes.wrapper}>
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
          <div className={classes.items}>
            <div className={classes.item}>
              <Button variant="contained">Download PDF</Button>
            </div>
          </div>
        </Box>
      </Box>
      <Divider />
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
export default MainNavBar;
