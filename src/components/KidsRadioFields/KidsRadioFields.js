import React from "react";

// FORM

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Box, Typography } from "@mui/material";
import { useField } from "formik";

const KidsRadioFields = ({ name }) => {
  // useField need to get name
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <Box marginLeft="10px" marginTop="10px">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group"
        {...configTextfield}
      >
        <FormControlLabel value="0" control={<Radio />} label="None" />
        <FormControlLabel value="1" control={<Radio />} label="1 child" />
        <FormControlLabel value="2" control={<Radio />} label="2 children" />
        <FormControlLabel value="3" control={<Radio />} label="3 children" />
        <FormControlLabel value="4" control={<Radio />} label="4 children" />
      </RadioGroup>
      <Typography
        sx={{
          color: "error.main",
        }}
      >
        {meta && meta.touched && meta.error ? meta.error : ""}
      </Typography>
    </Box>
  );
};

export default KidsRadioFields;
