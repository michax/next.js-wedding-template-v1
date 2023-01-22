import { Grid, Typography } from "@mui/material";
import React from "react";

export const TitleForm = () => {
  return (
    <Grid item xs={12} sx={{ mb: "3rem" }}>
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        Wedding Form
      </Typography>
    </Grid>
  );
};
