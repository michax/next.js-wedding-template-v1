import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DetailsInfo from "./DetailsInfo";

const InfoAmountCard = ({ title, cocktails }) => {
  return (
    <Card
      sx={{
        p: { xs: "20px", sm: "30px" },
        boxShadow: "5px",
        backgroundColor: "#FDFDEC",
      
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ mb: "2rem", textAlign: "center" }}>
          {title}
        </Typography>
        {cocktails.map(({ name, amount }) => (
          <DetailsInfo key={name} name={name} amount={amount} />
        ))}
      </Box>
    </Card>
  );
};

export default InfoAmountCard;
