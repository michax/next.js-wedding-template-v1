import { Typography } from "@mui/material";
import React from "react";

export const HeaderForm = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ mb: "3rem", }}
      >
        Confirm your attendance
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: "1rem",
          fontWeight: "bold",
          color: "#e74c3c",
   
        }}
      >
        Wedding day will be 8 July 2023
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "30rem",
          margin: "0 auto",
          mb: "2rem",
          mt: "2rem",
          
        }}
      >
        Join us as we celebrate our wedding, and use form to confirm your
        attendance.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "30rem",
          margin: "0 auto",
         
        }}
      >
        Please confirm your attendance no later than{" "}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "30rem",
            margin: "0 auto",
           
            fontWeight: "bold",
          }}
        >
          24th March 2023
        </Typography>
      </Typography>
    </>
  );
};
