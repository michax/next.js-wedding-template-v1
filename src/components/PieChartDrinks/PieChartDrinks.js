import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "../PieChart/PieChart";
import { Box } from "@mui/system";
import InfoAmountCard from "../InfoAmountCard/InfoAmountCard";

const PieChartDrinks = ({
  userData,
  vodkaAmount,
  ginAmount,
  whiskyAmount,
  beerAmount,
  isNonAlcoholAmount,
}) => {
  return (
    <>
      <Card
        sx={{
          p: { xs: "20px", sm: "30px" },
          boxShadow: "5px",
          textAlign: "center",
          backgroundColor: "#FDFDEC",
          mb: { xs: "20px", sm: "0" },
          mr: { xs: "0px", sm: "20px" },
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
      <InfoAmountCard
        title="Cocktail Popularity"
        cocktails={[
          { name: "Vodka cocktails", amount: vodkaAmount },
          { name: "Gin cocktails", amount: ginAmount },
          { name: "Whisky cocktails", amount: whiskyAmount },
          { name: "Beer cocktails", amount: beerAmount },
          { name: "Non-alcoholic cocktails", amount: isNonAlcoholAmount },
        ]}
      />
    </>
  );
};

export default PieChartDrinks;
