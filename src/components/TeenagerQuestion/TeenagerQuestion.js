import { FormControl, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TeenagersRadioFields from "../TeenagersRadioFields/TeenagersRadioFields";

export const TeenagerQuestion = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: "24px",
        mt: "24px",
      }}
    >
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{
            color: "#212B36",
            mb: "16px",
            textAlign: "left",
          }}
        >
          How many children{" "}
          <span style={{ fontWeight: "bold" }}>above 3 year</span> old do you
          have?
        </FormLabel>
        <TeenagersRadioFields name="amountTeenagers" />
      </FormControl>
    </Box>
  );
};
