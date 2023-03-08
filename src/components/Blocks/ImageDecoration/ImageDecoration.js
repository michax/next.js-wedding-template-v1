
import React from "react";
import Image from "next/image";
import imageDecoration from "../../../../public/imageDecoration.svg";
import { Box } from "@mui/material";

export const ImageDecoration = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "5%", sm: "0%", md: "-10%" },
        left: { xs: "40%", sm: "10%", md: "40%" },
        transform: "translate(-50%,-50%)",
        height: { xs: "auto", sm: "200px", md: "200px" },
        width: { xs: "450px", sm: "500px", md: "650px" },
      }}
    >
      <Image src={imageDecoration} alt="image" />
    </Box>
  );
};
