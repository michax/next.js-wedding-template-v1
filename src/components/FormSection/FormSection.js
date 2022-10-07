import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import leftdeco from "../../../public/leftdeco.svg";
import rightdec from "../../../public/rightdec.svg";

import React, { useState, useRef, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';

import Textfield from './FormsUI/Textfield';
import Select from './FormsUI/Select';

import Checkbox from './FormsUI/Checkbox';
import Button from './FormsUI/Button';

// Importing toastify module
import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// For showing notify
toast.configure();


export const FormSection = () => {
  const [successMessage, setSuccessMessage] = useState(false);


  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    termsOfService: false
  };

  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
    phone: Yup.number()
      .integer()
      .typeError('Please enter a valid phone number')
      .required('Required'),
    termsOfService: Yup.boolean()
      .oneOf([true], 'The terms and conditions must be accepted.')
      .required('The terms and conditions must be accepted.'),
  });

  // Validation Schema
  // const SignupSchema = yup.object({
  //   firstName: yup
  //     .string()
  //     .trim()
  //     .min(2, "To short name")
  //     .required("Name is required"),
  //   lastName: yup
  //     .string()
  //     .trim()
  //     .min(2, "To short last name")
  //     .required("Name is required"),
  //   email: yup
  //     .string()
  //     .email("Must be a valid email")
  //     .required("Email is required"),
  //   phone: yup
  //     .string()
  //     .test("Must be a valid phone", "Must be a valid phone number", (number) =>
  //       /^((0047)?|(\+47)?|(47)?)([- _1-9])(\d{7})$/.test(number)
  //     ),
  // });

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        // onNextFormStep();
      }, 4000);
    }

    // Clear the timer before setting a new one
    return () => {
      clearTimeout(timer);
    };
  }, [successMessage]);

  const onSubmit = async (values) => {
    // alert(JSON.stringify(values, null, 2));
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    };

    await fetch("/api/studyInputFields", {
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
          toast.success(" We have successfully saved your data", {
            autoClose: 3000,
          });
        } else if (responseStatus === 400) {
          setSuccessMessage(false);
          toast.error("Validation error ", { autoClose: 1000 });
        } else {
          setSuccessMessage(false);
          toast.error("Unknown server error", { autoClose: 1000 });
        }

        return res.json();
      })
      .then((data) => {
        console.log("res message", data.message);
        console.log("ID", data.id);
        const id = data.id;
        if (onSetId) {
          onSetId(id);
        }
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
        position: "relative"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: "5rem", }}>
          Confirm your attendance
        </Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Join us as we celebrate our wedding, and use form to confirm your attendance.

        </Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Please confirm your attendance no later than 24th March 2023
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "0%", md: "-10%" },
            left: { xs: "40%", sm: "10%", md: "40%" },
            transform: 'translate(-50%,-50%)',
            height: { xs: 'auto', sm: "200px", md: '200px' },
            width: { xs: '450px', sm: "500px", md: '650px' },

          }}
        >
          <Image src={leftdeco} alt="image" />
        </Box>
        <Box sx={{
          mt: "4rem",
        }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
              <Grid item xs={0} sm={1} md={2} >
                {/* svg */}
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                {/* form */}
                <Paper sx={{ pt: "4rem", pb: "4rem", pl: { xs: "0", md: "2rem" }, pr: { xs: "0", md: "2rem" } }}>
                  <Grid container>

                    <Grid item xs={12}>
                      <Container maxWidth="md">
                        <Formik
                          initialValues={{
                            ...INITIAL_FORM_STATE
                          }}
                          validationSchema={FORM_VALIDATION}
                          onSubmit={values => {
                            console.log(values);
                          }}
                        >
                          <Form>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" sx={{ mb: "1rem" }}>
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
                                <Textfield
                                  name="email"
                                  label="Email"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Textfield
                                  name="phone"
                                  label="Phone"
                                />
                              </Grid>
                              <Grid item xs={12}>
                                {/* <Select
                                  name="country"
                                  label="Country"
                                // options={countries}
                                /> */}
                              </Grid>
                             
                              <Grid item xs={12}>
                                <Typography sx={{ textAlign: "left", mt:"1rem", mb:"1rem" }}>
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
                                  name="termsOfService"
                                  legend="Terms Of Service"
                                  label="I agree"
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <Button >
                                  confirm your attendance
                                </Button>
                              </Grid>
                              {/* <Grid item xs={6}>
                                <Button >
                                cancel  your attendance
                                </Button>
                              </Grid> */}
                            </Grid>
                          </Form>
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
    </Box>
  );
};
