import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const PieChart = ({ chartData }) => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        Summary Drinks
      </Typography>
      <Pie data={chartData} />
    </>
  );
};
