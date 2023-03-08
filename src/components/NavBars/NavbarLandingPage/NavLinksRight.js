import { Typography } from "@mui/material";
import React from "react";

const linksRight = [
  { href: "#when", label: "When" },
  { href: "#our-story", label: "Our Story" },
  { href: "#our-memories", label: "Our Memories" },
];

const NavLinksRight = () => {
  return (
    <>
      {linksRight.map((link) => {
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

export default NavLinksRight;
