import React from "react";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";

export const PieChart = ({
  chartData,
  vodkaAmount,
  ginAmount,
  whiskyAmount,
  beerAmount,
  isNonAlcoholAmount,
}) => {


  return (
    <>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        Summary Drinks
      </Typography>
      <Pie data={chartData} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "2rem",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ opacity: 0.9, textAlign: "left" }}>
          Vodka cocktails: {vodkaAmount} people
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: "0.5rem" }}>
          {" "}
          Gin cocktails: {ginAmount} people
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: "0.5rem" }}>
          {" "}
          Whisky cocktails: {whiskyAmount} people
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: "0.5rem" }}>
          {" "}
          Beer cocktails: {beerAmount} people
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: "0.5rem" }}>
          {" "}
          Non-alcoholic cocktails: {isNonAlcoholAmount} people
        </Typography>
      </Box>
    </>
  );
};
