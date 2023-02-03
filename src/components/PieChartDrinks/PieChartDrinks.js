import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "../PieChart/PieChart";
import { Box } from "@mui/system";

const PieChartDrinks = ({
  userData,
  vodkaAmount,
  ginAmount,
  whiskyAmount,
  beerAmount,
  isNonAlcoholAmount,
}) => {
  return (
    <Box sx={{ pl: "30px", display: "flex" }}>
      <Card
        sx={{
          p: "30px",
          boxShadow: "5px",
          textAlign: "center",
          backgroundColor: "#FDFDEC",
          mr: "50px",
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
      <Card
        sx={{
          p: "30px",
          boxShadow: "5px",
          backgroundColor: "#FDFDEC",
          mr: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" sx={{ mb: "2rem", textAlign: "center" }}>
            Cocktail Popularity
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
              Vodka cocktails:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
              {vodkaAmount.length}{" "}
              {vodkaAmount.length === 1 ? "person" : "people"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
              Gin cocktails:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
              {ginAmount.length} {ginAmount.length === 1 ? "person" : "people"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
              Whisky cocktails:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
              {whiskyAmount.length}{" "}
              {whiskyAmount.length === 1 ? "person" : "people"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
              Beer cocktails:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
              {beerAmount.length}{" "}
              {beerAmount.length === 1 ? "person" : "people"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" sx={{ mb: "0.5rem", color: "primary" }}>
              Non-alcoholic cocktails:
            </Typography>
            <Typography variant="body1" color="primary" sx={{ ml: "5px" }}>
              {isNonAlcoholAmount.length}{" "}
              {isNonAlcoholAmount.length === 1 ? "person" : "people"}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default PieChartDrinks;
