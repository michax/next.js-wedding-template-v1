import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const Header = () => {
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
        <Typography variant="h1" sx={{ mb: "5rem" }}>
          Ewelina & Lukasz
        </Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Welcome to our wedding website! We're looking forward to celebrating
          our special day with you. Please browse our website to find everything
          you'll need to know to get ready for our big day and use form to
          confirm your attendance.
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
