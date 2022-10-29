import { Typography } from "@mui/material";
import React from "react";

export const HeaderForm = () => {
  return (
    <>
      <Typography variant="h2" sx={{ mb: "5rem" }}>
        Confirm your attendance
      </Typography>
      <Typography
        sx={{
          mb: "1rem",
          fontWeight: "bold",
          color: "#e74c3c",
        }}
      >
        Wedding day will be 8 July 2023
      </Typography>
      <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
        Join us as we celebrate our wedding, and use form to confirm your
        attendance.
      </Typography>
      <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
        Please confirm your attendance no later than 24th March 2023
      </Typography>
    </>
  );
};
