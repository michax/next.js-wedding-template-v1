import React from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { Formik, Form } from "formik";

import Textfield from "../FormSection/FormsUI/Textfield";
import Checkbox from "../FormSection/FormsUI/Checkbox";
import Button from "../FormSection/FormsUI/Button";

// Importing toastify module
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { AlcoholQuestion } from "../AlcoholQuestion/AlcoholQuestion";
import { FoodAllergicQuestion } from "../FoodAllergicQuestion/FoodAllergicQuestion";
import { TeenagerQuestion } from "../TeenagerQuestion/TeenagerQuestion";
import { KidsQuestion } from "../KidsQuestion/KidsQuestion";
import { TitleForm } from "../TitleForm/TitleForm";
import { AttendanceGuestDetailsQuestion } from "../AttendanceGuestDetailsQuestion/AttendanceGuestDetailsQuestion";

export const MainFormContainer = ({
  INITIAL_FORM_STATE,
  FORM_VALIDATION,
  onSubmit,
}) => {
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
                }}
              >
                {/* FORM */}
                {({ values }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <TitleForm />
                      <AttendanceGuestDetailsQuestion />
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            mb: "24px",
                            mt: "24px",
                            textAlign: "left",
                          }}
                        >
                          <Checkbox
                            name="isWithCompanion"
                            label="Will you come with an accompanying person?"
                          />
                        </Box>
                        <Grid container sx={{ mb: "24px" }}>
                          {values.isWithCompanion === true ? (
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    textTransform: "none",
                                    fontWeight: "600",
                                    mb: "24px",
                                    textAlign: "left",
                                  }}
                                >
                                  Great! 😊 Please write the name and surname of
                                  this person
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
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <Box sx={{ mb: "24px", textAlign: "left" }}>
                          <Checkbox
                            name="isWithChildren"
                            label="Will you join with your lovely children?"
                          />
                        </Box>
                        <Box>
                          {values.isWithChildren === true ? (
                            <>
                              <KidsQuestion />
                              <TeenagerQuestion />
                            </>
                          ) : (
                            ""
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "left",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          Additional information
                        </Typography>
                      </Grid>
                      <FoodAllergicQuestion />
                      <AlcoholQuestion />
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
  );
};
