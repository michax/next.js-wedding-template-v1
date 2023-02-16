import { Container, Grid, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import { AlcoholQuestion } from "../AlcoholQuestion/AlcoholQuestion";
import { FoodAllergicQuestion } from "../FoodAllergicQuestion/FoodAllergicQuestion";
import { TitleForm } from "../TitleForm/TitleForm";
import { AttendanceQuestion as AttendanceQuestion } from "../AttendanceQuestion/AttendanceQuestion ";
import CompanionQuestion from "../CompanionQuestion/CompanionQuestion";
import AdditionalInformationQuestionTitle from "../AdditionalInformationQuestionTitle/AdditionalInformationQuestionTitle";
import ChildrenQuestion from "../ChildrenQuestion/ChildrenQuestion";
import ExistingUserCheck from "../ExistingUserCheck/ExistingUserCheck";
import "react-toastify/dist/ReactToastify.css";

/**
 * The main form container for the wedding event RSVP form.
 * @param {Object} props - The component props.
 * @param {Object} props.INITIAL_FORM_STATE - The initial form state.
 * @param {Object} props.FORM_VALIDATION - The form validation schema.
 * @param {Function} props.onSubmit - The form submit handler.
 * @param {Boolean} props.isLoading - A flag indicating whether the form is currently submitting.
 * @param {Boolean} props.isExistingUser - A flag indicating whether the user has already submitted a response.
 */

export const MainFormContainer = ({
  INITIAL_FORM_STATE,
  FORM_VALIDATION,
  onSubmit,
  isLoading,
  isExistingUser,
}) => {
  return (
    <Grid item xs={12} sm={12} md={10}>
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
                      {/* Attendance guest details question */}
                      <AttendanceQuestion />

                      {values.isComing === "Yes" && (
                        <>
                          {/* Companion question */}
                          <CompanionQuestion values={values} />
                          {/* Children question */}
                          <ChildrenQuestion values={values} />
                          {/* Additional information Title */}
                          <AdditionalInformationQuestionTitle />
                          {/* Food Allergic question */}
                          <FoodAllergicQuestion />
                          {/* Alcohol question */}
                          <AlcoholQuestion />
                        </>
                      )}
                      {/*This component displays a message if the user already exists in the database  */}
                      {/* or a button to submit the form if the user is new. */}
                      <ExistingUserCheck
                        isExistingUser={isExistingUser}
                        isLoading={isLoading}
                      />
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
