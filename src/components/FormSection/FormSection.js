import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const FormSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: "5rem" }}>
          Confirm your attendance
        </Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Please confirm your attendance no later than 24th March 2023
        </Typography>
        <Button
          sx={{ mt: "5rem", fontSize: "1.5rem", backgroundColor: "#F2779A" }}
          variant="contained"
        >
          Confirm attendance
        </Button>
      </Container>
    </Box>
  );
};
