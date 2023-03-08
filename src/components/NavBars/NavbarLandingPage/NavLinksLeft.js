import { Typography } from "@mui/material";
import React from "react";

const linksLeft = [
  { href: "#confirm-attendance", label: "Confirm Attendance" },
  { href: "#gifts", label: "Gifts" },
  { href: "#location", label: "Location" },
];

const NavLinksLeft = () => {
  return (
    <>
      {linksLeft.map((link) => {
        return (
          <Typography
            key={link.label}
            component="a"
            href={link.href}
            sx={{
              ml: "35px",
              color: "#212B36",
              textDecoration: "none",
              borderBottom: "2px solid transparent",
              ":hover": {
                borderBottomColor: "#f2779ad6",
              },
            }}
          >
            {link.label}
          </Typography>
        );
      })}
    </>
  );
};

export default NavLinksLeft;
