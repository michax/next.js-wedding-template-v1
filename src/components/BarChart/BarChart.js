import React from "react";
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const BarChart = ({
  chartData,
  peanutsPeopleAllergies,
  eggsPeopleAllergies,
  nutsPeopleAllergies,
}) => {
  // console.log("chartData", chartData);

  return (
    <>
      <Typography variant="h3" sx={{ mb: "2rem" }}>
        Summary Food Allergy
      </Typography>

      <Bar data={chartData} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "2rem",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          Peanuts: {peanutsPeopleAllergies} people
        </Typography>
        <Typography variant="body1" sx={{ mb: "0.5rem" }}>
          Eggs: {eggsPeopleAllergies} people
        </Typography>
        <Typography variant="body1" sx={{ mb: "0.5rem" }}>
          Nuts: {nutsPeopleAllergies} people
        </Typography>
      </Box>
    </>
  );
};
