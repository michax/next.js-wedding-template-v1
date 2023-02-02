import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import * as Yup from "yup";

// Importing toastify module
import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { ConfettiSection } from "../ConfettiSection/ConfettiSection";
import { HeaderForm } from "../HeaderForm/HeaderForm";
import { ImageDecoration } from "../ImageDecoration/ImageDecoration";
import { ConfirmedMessage } from "../ConfirmedMessage/ConfirmedMessage";
import { MainFormContainer } from "../MainFormContainer/MainFormContainer";

// For showing notify
toast.configure();

export const FormSection = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    isVodka: false,
    isGin: false,
    isWhisky: false,
    isBeer: false,
    isNonAlcohol: false,

    isPeanuts: false,
    isEggs: false,
    isNuts: false,

    isWithCompanion: false,
    firstNameCompanion: "",
    lastNameCompanion: "",

    isComing: "Yes",

    isWithChildren: false,
    amountKids: "0",
    amountTeenagers: "0",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email.").required("Required"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),

    isWithCompanion: Yup.boolean(),
    firstNameCompanion: Yup.string().when("isWithCompanion", {
      is: (value) => value === true,
      then: Yup.string().required("Må fylles ut"),
      otherwise: Yup.string().nullable(),
    }),
    lastNameCompanion: Yup.string().when("isWithCompanion", {
      is: (value) => value === true,
      then: Yup.string().required("Må fylles ut"),
      otherwise: Yup.string().nullable(),
    }),
    isWithChildren: Yup.boolean(),
  });

  const onSubmit = async (values) => {
    // alert(JSON.stringify(values, null, 2));
    setIsLoading(true);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,

      isComing: values.isComing,

      isWithChildren: values.isWithChildren,
      amountKids: values.amountKids,
      amountTeenagers: values.amountTeenagers,

      isVodka: values.isVodka,
      isGin: values.isGin,
      isWhisky: values.isWhisky,
      isBeer: values.isBeer,
      isNonAlcohol: values.isNonAlcohol,

      isPeanuts: values.isPeanuts,
      isEggs: values.isEggs,
      isNuts: values.isNuts,

      isWithCompanion: values.isWithCompanion,
      firstNameCompanion: values.firstNameCompanion,
      lastNameCompanion: values.lastNameCompanion,
    };
    console.log("values from form", { values });
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        let responseStatus = res.status;

        console.log("response z api", { res, status: responseStatus });

        // Success Message
        if (responseStatus === 200) {
          setSuccessMessage(true);
          toast.success(" We have successfully saved your data 😊", {
            autoClose: 3000,
          });
          setIsLoading(false);
          setIsExploding(true);
        } else if (responseStatus === 400) {
          setSuccessMessage(false);
          toast.error("Validation error ", { autoClose: 1000 });
          setIsExploding(false);
        } else {
          setSuccessMessage(false);
          toast.error("Unknown server error", { autoClose: 1000 });
          setIsExploding(false);
        }

        return res.json();
      })
      .then((data) => {
        console.log("res message", data.message);
        console.log("ID", data.id);
      })
      .catch((error) => {
        console.error(error);
        setSuccessMessage(false);
        toast.error("Runtime error, try again", { autoClose: 1000 });
      });
  };

  return (
    <Box
      id="confirm-attendance"
      sx={{
        pt: "8rem",
        pb: "8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ConfettiSection isExploding={isExploding} />
      {successMessage ? (
        <ConfirmedMessage />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          <HeaderForm />
          <ImageDecoration />
          <Box
            sx={{
              mt: "4rem",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                sx={{ justifyContent: "space-between" }}
              >
                <Grid item xs={0} sm={1} md={2}>
                  {/* svg  svg in the future*/}
                </Grid>
                <MainFormContainer
                  INITIAL_FORM_STATE={INITIAL_FORM_STATE}
                  FORM_VALIDATION={FORM_VALIDATION}
                  isLoading={isLoading}
                  onSubmit={onSubmit}
                />
                <Grid item xs={0} sm={1} md={2}>
                  {/* svg in the future */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
};
