import { Grid, Typography } from "@mui/material";
import React from "react";

const AdditionalInformationQuestionTitle = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        Additional information
      </Typography>
    </Grid>
  );
};

export default AdditionalInformationQuestionTitle;
