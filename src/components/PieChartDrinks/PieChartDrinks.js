import { Card, Grid } from "@mui/material";
import React from "react";
import { PieChart } from "../PieChart/PieChart";


const PieChartDrinks = ({
  userData,
  vodkaAmount,
  ginAmount,
  whiskyAmount,
  beerAmount,
  isNonAlcoholAmount
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
      <PieChart
        chartData={userData}
        vodkaAmount={vodkaAmount.length}
        ginAmount={ginAmount.length}
        whiskyAmount={whiskyAmount.length}
        beerAmount={beerAmount.length}
        isNonAlcoholAmount={isNonAlcoholAmount.length}
      />
    </Card>
  </Grid>
  );
};

export default PieChartDrinks;
