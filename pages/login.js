import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextfieldWrapper from "../src/components/FormSection/FormsUI/Textfield";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const [isLogging, setIsLogging] = useState(false);
  const router = useRouter();

  // redirect
  useEffect(() => {
    if (isLogging) {
      router.push("/invitations");
    }
  }, [isLogging, router]);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    setIsLogging(false);

    const dataToSend = {
      username: values.username,
      password: values.password,
    };

    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    if (response.status === 402) {
      setFieldError("username", "User is incorrect");
      return;
    }

    if (response.status === 401) {
      setFieldError("password", "Password is incorrect");
      return;
    }
    if (response.status === 200) {
      setIsLogging(true);
    }

    const data = await response.json();

    if (data.success) {
      setCookie("session", data.sessionId, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
      setIsLogging(true);
    } else {
      console.log(data.message);
    }

    setSubmitting(false);
  };

  return (
    <>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Grid container sx={{ p: "10px" }} maxWidth="sm">
                <Grid item xs={12}>
                  {" "}
                  <TextfieldWrapper
                    sx={{ mb: "20px" }}
                    name="username"
                    label="Username"
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextfieldWrapper
                    sx={{ mb: "20px" }}
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>

                <Button
                  disabled={isSubmitting}
                  sx={{ width: "100%" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LoginPage;

const Navigation = () => {
  return (
    <AppBar sx={{ backgroundColor: "#fcfff7" }} elevation={1} position="static">
      <Container maxWidth="md">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="primary" variant="h3">
            E&L
          </Typography>
          <Button variant="contained" color="primary" href="/">
            Return to Main Page
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
