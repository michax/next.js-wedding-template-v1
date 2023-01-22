import React from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import Textfield from "../FormSection/FormsUI/Textfield";


export const AttendanceExtraPersonDetailsQuestion = ({values}) => {
  return (
    <>
      <Box
        sx={{
          mb: "24px",
          ml: "16px",
          mt: "30px",
        }}
      >
        <Checkbox
          name="isWithCompanion"
          label="Will you come with an accompanying person?"
        />
      </Box>
      <Box sx={{ mb: "24px", width: "100%" }}>
        {values.isWithCompanion === true ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "none",
                  fontWeight: "600",
                  mb: "24px",
                }}
              >
                Great! 😊 Please write the name and surname of this person
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="firstNameCompanion" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="lastNameCompanion" label="Last Name" />
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
