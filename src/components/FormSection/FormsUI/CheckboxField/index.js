import React, { useState } from 'react';

import { useField, useFormikContext } from 'formik';
import { Checkbox } from '@mui/material';

const CheckboxField = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }



  return (
    <Checkbox {...configCheckbox} />
  );
};

export default CheckboxField;


{/* <FormLabel component="legend"> Some asked question here? </FormLabel>
<FormGroup>
  <FormControlLabel
    control={<Checkbox checked={one} color="primary" onChange={handleChange} name="isBaby" />}
    label="0- 1 age"
  />
  <FormControlLabel
    control={<Checkbox checked={two} color="primary" onChange={handleChange} name="isBaby2" />}
    label="1-3 age"
  />
  <FormControlLabel
    control={<Checkbox checked={three} color="primary" onChange={handleChange} name="isBaby3" />}
    label="> 3"
  />
</FormGroup> */}