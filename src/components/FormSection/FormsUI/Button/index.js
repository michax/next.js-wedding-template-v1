import React from "react";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button sx={{ backgroundColor: "#F2779A" }} {...configButton}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
