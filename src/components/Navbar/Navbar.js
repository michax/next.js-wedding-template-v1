import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';



const drawerWidth = 240;
const navItemsLeft = ['Confirm attendance', 'Gifts', 'Location'];
const navItemsRight = ['When', 'Our history', 'Our Photos'];

export const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E&L
      </Typography>
      <Divider />
      <List>
        {navItemsRight.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Typography
                key={item}
                component="a"
                href={`#${item}`}
                variant="p"
                sx={{ display: { xs: 'block', sm: 'none' }, ml: "20px" }}
              >
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {navItemsLeft.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Typography
                key={item}
                component="a"
                href={`#${item}`}
                variant="p"
                sx={{ display: { xs: 'block', sm: 'none' }, ml: "20px" }}
              >
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar sx={{ width: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", width: "100%" }}>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navItemsRight.map((item) => (
                  <Typography
                    key={item}
                    component="a"
                    href={`#${item}`}
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' }, ml: "20px" }}
                  >
                    {item}
                  </Typography>


                ))}
              </Box>
              <Typography
                component="a"
                href="/"
                variant="h6"

                sx={{ display: { xs: 'none', sm: 'block' }, ml: "20px" }}
              >
                E&L
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navItemsLeft.map((item) => (
                  <Typography
                    key={item}
                    component="a"
                    href={`#${item}`}
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' }, ml: "20px" }}
                  >
                    {item}
                  </Typography>


                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box >
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};






