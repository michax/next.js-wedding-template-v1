import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import {
  Box,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import leftdeco from "../../../public/leftdeco.svg";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Textfield from "./FormsUI/Textfield";

import Checkbox from "./FormsUI/Checkbox";
import Button from "./FormsUI/Button";

// Importing toastify module
import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { ConfettiSection } from "../ConfettiSection/ConfettiSection";
import CheckboxField from "./FormsUI/CheckboxField";

// For showing notify
toast.configure();

export const FormSection = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

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
    isComing: false,

    isWithCompanion: false,
    firstNameCompanion: "",
    lastNameCompanion: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email.").required("Required"),
    phone: Yup.number()
      .integer()
      .typeError("Please enter a valid phone number")
      .required("Required"),
    isComing: Yup.boolean()
      .oneOf([true], "Will you attend to celebrate special day us?")
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
  });

  const onSubmit = async (values) => {
    // alert(JSON.stringify(values, null, 2));
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,

      isComing: values.isComing,

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

      //Children
      isWithChildren: values.isWithChildren,
      isOneChild: values.isOneChild,
      isTwoChildren: values.isTwoChildren,
      isThreeChildren: values.isThreeChildren,
      isFourChildren: values.isFourChildren,
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
        <ConfirmSection />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ mb: "5rem" }}>
            Confirm your attendance
          </Typography>
          <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
            Join us as we celebrate our wedding, and use form to confirm your
            attendance.
          </Typography>
          <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
            Please confirm your attendance no later than 24th March 2023
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "5%", sm: "0%", md: "-10%" },
              left: { xs: "40%", sm: "10%", md: "40%" },
              transform: "translate(-50%,-50%)",
              height: { xs: "auto", sm: "200px", md: "200px" },
              width: { xs: "450px", sm: "500px", md: "650px" },
            }}
          >
            <Image src={leftdeco} alt="image" />
          </Box>
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
                  {/* svg */}
                </Grid>
                <Grid item xs={12} sm={10} md={8}>
                  {/* form */}
                  <Paper
                    sx={{
                      pt: "4rem",
                      pb: "4rem",
                      pl: { xs: "0", md: "2rem" },
                      pr: { xs: "0", md: "2rem" },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Container maxWidth="md">
                          <Formik
                            initialValues={{
                              ...INITIAL_FORM_STATE,
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={async (values, actions) => {
                              // console.log("Values:", values);
                              actions.setSubmitting(true);
                              await onSubmit(values);
                              actions.setSubmitting(false);
                            }}
                          >
                            {/* FORM */}
                            {({ values, errors, touched }) => (
                              <Form>
                                <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                    <Typography
                                      variant="h4"
                                      sx={{ mb: "1rem" }}
                                    >
                                      Wedding Form
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Textfield
                                      name="firstName"
                                      label="First Name"
                                    />
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Textfield
                                      name="lastName"
                                      label="Last Name"
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Textfield name="email" label="Email" />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Textfield name="phone" label="Phone" />
                                  </Grid>
                                  <>
                                    <Box
                                      sx={{
                                        mb: "24px",
                                        ml: "16px",
                                        mt: "30px",
                                      }}
                                    >
                                      <Checkbox
                                        name="isWithCompanion"
                                        label="Will you come with an accompanying person?"
                                      />
                                    </Box>

                                    <Box sx={{ mb: "24px", width: "100%" }}>
                                      {values.isWithCompanion === true ? (
                                        <Grid container spacing={2}>
                                          <Grid item xs={12}>
                                            <Typography
                                              variant="body1"
                                              sx={{
                                                textTransform: "none",
                                                fontWeight: "600",
                                                mb: "24px",
                                              }}
                                            >
                                              SUPER!
                                            </Typography>
                                          </Grid>
                                          <Grid item xs={6}>
                                            <Textfield
                                              name="firstNameCompanion"
                                              label="First Name"
                                            />
                                          </Grid>
                                          <Grid item xs={6}>
                                            <Textfield
                                              name="lastNameCompanion"
                                              label="Last Name"
                                            />
                                          </Grid>
                                        </Grid>
                                      ) : (
                                        ""
                                      )}
                                    </Box>
                                  </>
                                  <>
                                    <Box sx={{ mb: "24px", ml: "16px" }}>
                                      <Checkbox
                                        name="isWithChildren"
                                        label="Will you join the wedding with your lovely children?"
                                      />
                                    </Box>
                                    <Box>
                                      {values.isWithChildren === true ? (
                                        <>
                                          <Typography
                                            variant="body1"
                                            component="p"
                                            sx={{
                                              textTransform: "none",
                                              fontWeight: "600",
                                              mb: "24px",
                                            }}
                                          >
                                            We plan to hire a person who will
                                            take care of the children while we
                                            are dancing, so the following
                                            information is important to us
                                          </Typography>
                                          <Box
                                            sx={{
                                              display: "flex",
                                              flexDirection: "column",
                                            }}
                                          >
                                            <FormLabel component="legend">
                                              {" "}
                                              How many children under the age of
                                              3 do you have?{" "}
                                            </FormLabel>
                                            <FormGroup>
                                              <FormControlLabel
                                                control={
                                                  <CheckboxField name="isOneChild" />
                                                }
                                                label="1 child"
                                              />
                                              <FormControlLabel
                                                control={
                                                  <CheckboxField name="isTwoChildren" />
                                                }
                                                label="2 children"
                                              />
                                              <FormControlLabel
                                                control={
                                                  <CheckboxField name="isThreeChildren" />
                                                }
                                                label="3 children"
                                              />
                                              <FormControlLabel
                                                control={
                                                  <CheckboxField name="isFourChildren" />
                                                }
                                                label="4 children"
                                              />
                                            </FormGroup>
                                          </Box>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </Box>
                                  </>

                                  <Grid item xs={12}>
                                    <Typography
                                      sx={{
                                        textAlign: "left",
                                        mt: "1rem",
                                        mb: "1rem",
                                      }}
                                    >
                                      Additional information
                                    </Typography>
                                  </Grid>
                                  {/* <Grid item xs={12}>
                                <Textfield
                                  name="message"
                                  label="Message"
                                  multiline={true}
                                  rows={4}
                                />
                              </Grid> */}

                                  <Grid item xs={12} sx={{ textAlign: "left" }}>
                                    <Checkbox
                                      name="isComing"
                                      legend="Are you coming?"
                                      label="Confirm"
                                    />
                                  </Grid>

                                  <Grid item xs={12} sx={{ textAlign: "left" }}>
                                    <FormLabel component="legend">
                                      {" "}
                                      What food Are you allergic to?{" "}
                                    </FormLabel>
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isPeanuts" />
                                        }
                                        label="Peanuts"
                                      />
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isEggs" />
                                        }
                                        label="Eggs"
                                      />
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isNuts" />
                                        }
                                        label="nuts (e.g., almonds, walnuts, pecans)"
                                      />
                                    </FormGroup>
                                  </Grid>

                                  <Grid item xs={12} sx={{ textAlign: "left" }}>
                                    <FormLabel component="legend">
                                      {" "}
                                      What is your most liked alcoholic drink ?
                                    </FormLabel>
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isVodka" />
                                        }
                                        label="Vodka cocktails"
                                      />
                                      <FormControlLabel
                                        control={<CheckboxField name="isGin" />}
                                        label="Gin cocktails"
                                      />
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isWhisky" />
                                        }
                                        label="Whisky cocktails"
                                      />
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isBeer" />
                                        }
                                        label="Beer"
                                      />
                                      <FormControlLabel
                                        control={
                                          <CheckboxField name="isNonAlcohol" />
                                        }
                                        label="non-alcoholic cocktail"
                                      />
                                    </FormGroup>
                                  </Grid>

                                  <Grid item xs={12}>
                                    <Button>Submit form</Button>
                                  </Grid>
                                </Grid>
                              </Form>
                            )}
                          </Formik>
                        </Container>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={0} sm={1} md={2}>
                  {/* svg */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
};

const ConfirmSection = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper
            sx={{
              pt: "4rem",
              pb: "4rem",
              pl: { xs: "0", md: "2rem" },
              pr: { xs: "0", md: "2rem" },
            }}
          >
            <Typography variant="h4" sx={{ mb: "1rem", textAlign: "center" }}>
              Thank you for confirming your attendance at our wedding.
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              We are so excited that you are going to join us in Santorini to
              celebrate our special day. We are truly blessed to have so many
              wonderful people in our lives that are willing to travel so far to
              be with us as we embark on the greatest adventure of our live. It
              means the world to us!
            </Typography>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
