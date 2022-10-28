import React from "react";

// FORM

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Box, Typography } from "@mui/material";
import { useField } from "formik";


const RadioGroupField = ({ name}) => {
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
        defaultValue="Yes"
        name="radio-buttons-group"
        {...configTextfield}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes, I will" />
        <FormControlLabel value="No" control={<Radio />} label="Unfortunately, I will not" />
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

export default RadioGroupField;
