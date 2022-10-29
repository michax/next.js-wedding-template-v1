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
        We plan to hire a person who will take care of the children 👶 while we
        will be dancing 💃🕺 Could you tell us:
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
            How many children{" "}
            <span style={{ fontWeight: "bold" }}>under the age of 3</span> do
            you have?
          </FormLabel>
          <KidsRadioFields name="amountKids" />
        </FormControl>
      </Box>
    </>
  );
};
