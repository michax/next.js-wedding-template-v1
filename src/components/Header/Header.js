import { Box, Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { Container } from "@mui/system";
import React from "react";
import hearts from "../../../public/hearts.json";
import Link from "next/link";

const style = {
  height: 200,
};

const AnimationHearts = () => {
  return <Lottie animationData={hearts} style={style} />;
};

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          // height: "100vh",
          pt: "5rem",
          pb: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          <AnimationHearts />
          <Typography
            variant="h1"
            sx={{
              mb: "3rem",
              fontSize: { xs: "2.3rem", md: "3.3rem", xl: "4rem" },
            }}
          >
            Ewelina & Lukasz
          </Typography>
          <Typography
            variant="body2"
            sx={{
              maxWidth: "35em",
              margin: "0 auto",
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
            }}
          >
            Welcome to our digital wedding invitation! We&apos;re looking
            forward to celebrating our special day with you. Please join us as
            we celebrate our wedding, and use form to confirm your attendance.
          </Typography>
          <Link href="#Confirm%20Attendance">
            <Button
              sx={{
                mt: "5rem",
                fontSize: "1.5rem",
                backgroundColor: "#F2779A",
              }}
              variant="contained"
            >
              Confirm attendance
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};
