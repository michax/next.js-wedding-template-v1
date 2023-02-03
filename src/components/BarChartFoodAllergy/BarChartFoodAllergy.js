import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { BarChart } from "../BarChart/BarChart";
import InfoAmountCard from "../InfoAmountCard/InfoAmountCard";

const BarChartFoodAllergy = ({
  userDataFoodAllergy,
  peanutsPeopleAllergies,
  eggsPeopleAllergies,
  nutsPeopleAllergies,
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
    </Box>
  );
};

export default BarChartFoodAllergy;
