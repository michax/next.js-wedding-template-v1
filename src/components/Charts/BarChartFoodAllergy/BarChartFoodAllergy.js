import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { BarChart } from "../BarChart/BarChart";
import InfoAmountCard from "../../Blocks/InfoAmountCard/InfoAmountCard";

const BarChartFoodAllergy = ({
  userDataFoodAllergy,
  peanutsPeopleAllergies,
  eggsPeopleAllergies,
  nutsPeopleAllergies,
}) => {
  return (
    <>
      <Card
        sx={{
          p: "30px",
          boxShadow: "5px",
          textAlign: "center",
          backgroundColor: "#FDFDEC",
          mb: { xs: "20px", sm: "0" },
          mr: { xs: "0px", sm: "20px" },
        }}
      >
        <BarChart
          chartData={userDataFoodAllergy}
          peanutsPeopleAllergies={peanutsPeopleAllergies?.length}
          eggsPeopleAllergies={eggsPeopleAllergies?.length}
          nutsPeopleAllergies={nutsPeopleAllergies?.length}
        />
      </Card>
      <InfoAmountCard
        title="Food Allergy Summary"
        cocktails={[
          { name: "Peanuts", amount: peanutsPeopleAllergies },
          { name: "Eggs", amount: eggsPeopleAllergies },
          { name: "Nuts", amount: nutsPeopleAllergies },
        ]}
      />
    </>
  );
};

export default BarChartFoodAllergy;
