import { Box, FormControl, FormLabel, Typography } from "@mui/material";
import React from "react";
import KidsRadioFields from "../KidsRadioFields/KidsRadioFields";

export const KidsQuestion = () => {
  return (
    <>
      <Typography
        variant="body1"
        component="p"
        sx={{
          textTransform: "none",
          fontWeight: "600",
          mb: "24px",
          textAlign: "left",
        }}
      >
        Great! 😊 We&apos;re hiring a pro to keep the kids entertained while
        we dance the night away!💃🕺 Just a heads up, we want to get an idea of
        how many mini guests to expect.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "30px",
          mt: "30px",
          textAlign: "left",
        }}
      >
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              mb: "16px",
              color: "#212B36",
            }}
          >
            Could you please let us know the number of children
            <span style={{ fontWeight: "bold" }}> under 3 </span>?
          </FormLabel>
          <KidsRadioFields name="amountKids" />
        </FormControl>
      </Box>
    </>
  );
};
