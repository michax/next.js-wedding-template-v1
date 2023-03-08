import { FormControlLabel, FormGroup, FormLabel, Grid } from "@mui/material";
import React from "react";
import CheckboxField from "../../../Sections/FormSection/FormsUI/CheckboxField";

export const FoodAllergicQuestion = () => {
  return (
    <Grid item xs={12} sx={{ textAlign: "left" }}>
      <FormLabel
        component="legend"
        sx={{
          color: "#212B36",
          mb: "10px",
          mt: "10px",
        }}
      >
        {" "}
        What food Are you allergic to?{" "}
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<CheckboxField name="isPeanuts" />}
          label="Peanuts"
        />
        <FormControlLabel
          control={<CheckboxField name="isEggs" />}
          label="Eggs"
        />
        <FormControlLabel
          control={<CheckboxField name="isNuts" />}
          label="nuts (e.g., almonds, walnuts, pecans)"
        />
      </FormGroup>
    </Grid>
  );
};
