import React from "react";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

import { Formik, Form } from "formik";

import Textfield from "../FormSection/FormsUI/Textfield";
import Checkbox from "../FormSection/FormsUI/Checkbox";
import Button from "../FormSection/FormsUI/Button";
import CheckboxField from "../FormSection/FormsUI/CheckboxField";

// Importing toastify module
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import ConfirmAttendanceRadioFields from "../ConfirmAttendanceRadioFields/ConfirmAttendanceRadioFields";
import KidsRadioFields from "../KidsRadioFields/KidsRadioFields";
import TeenagersRadioFields from "../TeenagersRadioFields/TeenagersRadioFields";

export const MainFormContainer = ({INITIAL_FORM_STATE, FORM_VALIDATION, onSubmit}) => {
  return (
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
              } }
            >
              {/* FORM */}
              {({ values, errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mb: "3rem" }}>
                      <Typography
                        variant="h4"
                        sx={{ mb: "1rem" }}
                      >
                        Wedding Form
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{ textAlign: "left", mb: "1rem" }}
                    >
                      <FormControl>
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          sx={{
                            fontWeight: "bold",
                            mb: ".5rem",
                          }}
                        >
                          Will you attend to celebrate our special
                          day with us?
                        </FormLabel>
                        <ConfirmAttendanceRadioFields name="isComing" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        name="firstName"
                        label="First Name" />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        name="lastName"
                        label="Last Name" />
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
                          label="Will you come with an accompanying person?" />
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
                                Great! 😊 Please write the name
                                and surname of this person
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Textfield
                                name="firstNameCompanion"
                                label="First Name" />
                            </Grid>
                            <Grid item xs={6}>
                              <Textfield
                                name="lastNameCompanion"
                                label="Last Name" />
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
                          label="Will you join with your lovely children?" />
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
                              take care of the children 👶 while
                              we will be dancing, we need to know
                              :{" "}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                mb: "1.5rem",
                                mt: "1.5rem",
                              }}
                            >
                              <FormControl>
                                <FormLabel
                                  id="demo-radio-buttons-group-label"
                                  sx={{
                                    fontWeight: "bold",
                                    mb: ".5rem",
                                  }}
                                >
                                  How many children under the age
                                  of 3 do you have?
                                </FormLabel>
                                <KidsRadioFields name="amountKids" />
                              </FormControl>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                mb: "1.5rem",
                                mt: "1.5rem",
                              }}
                            >
                              <FormControl>
                                <FormLabel
                                  id="demo-radio-buttons-group-label"
                                  sx={{
                                    fontWeight: "bold",
                                    mb: ".5rem",
                                  }}
                                >
                                  How many children above 3 year
                                  old do you have?
                                </FormLabel>
                                <TeenagersRadioFields name="amountTeenagers" />
                              </FormControl>
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
                          fontWeight: "bold",
                          textAlign: "left",
                          mt: "1rem",
                          mb: "1rem",
                        }}
                      >
                        Additional information
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                      <FormLabel
                        component="legend"
                        sx={{
                          fontWeight: "bold",
                          mb: ".5rem",
                        }}
                      >
                        {" "}
                        What food Are you allergic to?{" "}
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<CheckboxField name="isPeanuts" />}
                          label="Peanuts" />
                        <FormControlLabel
                          control={<CheckboxField name="isEggs" />}
                          label="Eggs" />
                        <FormControlLabel
                          control={<CheckboxField name="isNuts" />}
                          label="nuts (e.g., almonds, walnuts, pecans)" />
                      </FormGroup>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{ textAlign: "left", mt: "2rem" }}
                    >
                      <FormLabel
                        component="legend"
                        sx={{
                          fontWeight: "bold",
                          mb: ".5rem",
                        }}
                      >
                        {" "}
                        What is your most liked alcoholic drink ?
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<CheckboxField name="isVodka" />}
                          label="Vodka cocktails" />
                        <FormControlLabel
                          control={<CheckboxField name="isGin" />}
                          label="Gin cocktails" />
                        <FormControlLabel
                          control={<CheckboxField name="isWhisky" />}
                          label="Whisky cocktails" />
                        <FormControlLabel
                          control={<CheckboxField name="isBeer" />}
                          label="Beer" />
                        <FormControlLabel
                          control={<CheckboxField name="isNonAlcohol" />}
                          label="non-alcoholic cocktail" />
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
  )
}
