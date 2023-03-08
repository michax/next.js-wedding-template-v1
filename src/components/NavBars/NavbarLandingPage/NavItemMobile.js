import { ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

const links = [
  { href: "#confirm-attendance", label: "Confirm Attendance" },
  { href: "#gifts", label: "Gifts" },
  { href: "#location", label: "Location" },
  { href: "#when", label: "When" },
  { href: "#our-story", label: "Our Story" },
  { href: "#our-memories", label: "Our Memories" },
];

const NavItemMobile = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <ListItem key={link.key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Typography
                component="a"
                href={link.href}
                variant="p"
                sx={{ display: { sm: "block", md: "none" } }}
              >
                {link.label}
              </Typography>
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavItemMobile;
