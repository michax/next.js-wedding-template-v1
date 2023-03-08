import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DetailsInfo = ({ name, amount }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
        {name}:
      </Typography>
      <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
        {amount.length} {amount.length === 1 ? "person" : "people"}
      </Typography>
    </Box>
  );
};

export default DetailsInfo;
