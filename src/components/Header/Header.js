import { Box, Button, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import couple from "../../../public/couple.png";
import React from "react";
import hearts from "../../../public/hearts.json";

import { useRouter } from "next/router";
import Image from "next/image";

const style = {
  height: 200,
};

const AnimationHearts = () => {
  return <Lottie animationData={hearts} style={style} />;
};

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          pt: { xs: "8rem", sm: "8rem", md: "12rem" },
          pb: { xs: "5rem", sm: "5rem", md: "15rem" },
          heigh: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
            flexDirection: { xs: "column", sm: "column", md: "row" },
            heigh: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              heigh: "auto",
              mr: { xs: "0", sm: "0", md: "2rem" },
              width: { xs: "100%", sm: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: { xs: "2rem", sm: "2rem", md: "5rem" },
                textAlign: { xs: "center", sm: "center", md: "flex-start" },
              }}
            >
              Ewelina & Lukasz
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "30rem",
                textAlign: "center",
                marginBottom: { xs: "2rem", sm: "2rem", md: "5rem" },
              }}
            >
              Welcome to our digital wedding invitation! We&apos;re looking
              forward to celebrating our special day with you. Please join us as
              we celebrate our wedding, and use form to confirm your attendance.
            </Typography>

            <Button
              sx={{
                //how to set button on the bottom in this box
                fontSize: "1.5rem",
                backgroundColor: "#F2779A",
                width: "100%",
              }}
              variant="contained"
              color="primary"
              onClick={() => router.push("#confirm-attendance")}
            >
              Confirm Attendance
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "10%",
            }}
          >
            <AnimationHearts />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              ml: { xs: "0", sm: "0", md: "2rem" },
            }}
          >
            <Image src={couple} alt="couple" />
          </Box>
        </Container>
      </Box>
    </>
  );
};
