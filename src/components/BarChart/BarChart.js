import React from "react";
import { Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData }) => {
  // console.log("chartData", chartData);

  return (
    <>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        Food Allergy Overview
      </Typography>
      <Bar data={chartData} />
    </>
  );
};
