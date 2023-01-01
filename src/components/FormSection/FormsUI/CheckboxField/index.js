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


