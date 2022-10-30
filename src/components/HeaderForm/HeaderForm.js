import { Typography } from "@mui/material";
import React from "react";

export const HeaderForm = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ mb: "5rem", fontSize: { xs: "2.4rem", md: "3.1rem" } }}
      >
        Confirm your attendance
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          mb: "1rem",
          fontWeight: "bold",
          color: "#e74c3c",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        Wedding day will be 8 July 2023
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          maxWidth: "30rem",
          margin: "0 auto",
          mb: "3rem",
          mt: "3rem",
          fontSize: { xs: ".9rem", md: "1.2rem" },
        }}
      >
        Join us as we celebrate our wedding, and use form to confirm your
        attendance.
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          maxWidth: "30rem",
          margin: "0 auto",
          fontSize: { xs: ".9rem", md: "1.2rem" },
        }}
      >
        Please confirm your attendance no later than 24th March 2023
      </Typography>
    </>
  );
};
