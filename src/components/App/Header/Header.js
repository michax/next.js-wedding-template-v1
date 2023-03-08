import { Box, Button, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import hearts from "../../../../public/hearts.json";
import { useRouter } from "next/router";
import Image from "next/image";

const style = {
  height: 200,
};

const AnimationHearts = () => {
  return <Lottie animationData={hearts} style={style} />;
};

export const Header = ({ imageUrlHeader }) => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          pl: "1rem",
          pr: "1rem",
          pt: { xs: "8rem", sm: "8rem", md: "15rem" },
          pb: { xs: "5rem", sm: "5rem", md: "15rem" },
          heigh: "100%",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
            },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            heigh: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
              },
              flexDirection: "column",
              heigh: "auto",

              width: { xs: "100%", sm: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: { xs: "2.5rem", sm: "2.5rem", md: "3rem" },
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              Emily & Lucas
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "30rem",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                },
                marginBottom: { xs: "2rem", sm: "2rem", md: "3rem" },
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
                width: { xs: "80%", sm: "80%", md: "100%" },
                mt: { xs: "2.5rem", sm: "2.5rem", md: "0rem" },
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
              ml: { xs: "0", sm: "0", md: "2rem" },
              width: { xs: "100%", sm: "100%", md: "50%" },
              boxShadow: "0px 15px 15px -10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
            }}
          >
            <Image
              height={350}
              width={500}
              layout="responsive"
              src={imageUrlHeader}
              alt="couple"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
