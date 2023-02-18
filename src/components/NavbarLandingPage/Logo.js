import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";

const Logo = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        width: "100px",
        ml: "35px",
        mt: "10px",
      }}
    >
      <Image src={logo} alt="Logo" />
    </Box>
  );
};

export default Logo;
