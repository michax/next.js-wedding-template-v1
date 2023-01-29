import { Card, Grid } from "@mui/material";
import React from "react";
import { BarChart } from "../BarChart/BarChart";


const BarChartFoodAllergy = ({
  userDataFoodAllergy,
  peanutsPeopleAllergies,
  eggsPeopleAllergies,
  nutsPeopleAllergies,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          py: 6,
          boxShadow: "5px",
          textAlign: "center",
          backgroundColor: "#FDFDEC",
        }}
      >
        <BarChart
          chartData={userDataFoodAllergy}
          peanutsPeopleAllergies={peanutsPeopleAllergies?.length}
          eggsPeopleAllergies={eggsPeopleAllergies?.length}
          nutsPeopleAllergies={nutsPeopleAllergies?.length}
        />
      </Card>
    </Grid>
  );
};

export default BarChartFoodAllergy;
