import { FormControlLabel, FormGroup, FormLabel, Grid } from "@mui/material";
import React from "react";
import CheckboxField from "../../../Sections/FormSection/FormsUI/CheckboxField";

export const AlcoholQuestion = () => {
  return (
    <Grid item xs={12} sx={{ textAlign: "left", mt: "2rem",mb:"3rem" }}>
      <FormLabel
        component="legend"
        sx={{
          color: "#212B36",
          mb: "10px",
          mt: "10px",
        }}
      >

        What is your most liked alcoholic drink ?
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<CheckboxField name="isVodka" />}
          label="Vodka cocktails"
        />
        <FormControlLabel
          control={<CheckboxField name="isGin" />}
          label="Gin cocktails"
        />
        <FormControlLabel
          control={<CheckboxField name="isWhisky" />}
          label="Whisky cocktails"
        />
        <FormControlLabel
          control={<CheckboxField name="isBeer" />}
          label="Beer"
        />
        <FormControlLabel
          control={<CheckboxField name="isNonAlcohol" />}
          label="non-alcoholic cocktail"
        />
      </FormGroup>
    </Grid>
  );
};
