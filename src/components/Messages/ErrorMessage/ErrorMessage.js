import { Typography } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Box } from "@mui/system";

export const ErrorMessage = ({ message }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SentimentDissatisfiedIcon />
      <Typography sx={{ ml: "10px" }} variant="h5">
        {message}
      </Typography>
    </Box>
  );
};
