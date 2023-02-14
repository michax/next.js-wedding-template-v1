import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import flowers from "../../../public/flowers.png";
import giftr from "../../../public/giftr.png";
import Image from "next/image";

export const GiftSection = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          pt: { xs: "3rem", sm: "5rem", md: "10rem" },
          pb: { xs: "0rem", sm: "1rem", md: "8rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          id="gifts"
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: "3rem",
                mt: "5rem",
                fontSize: { xs: "2.4rem", md: "3.1rem" },
              }}
            >
              Inspiring Wedding Gift Ideas
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "35em",
                margin: "0 auto",
              }}
            >
              If you&apos;re wondering what to give us, below are some gift
              suggestions
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                width: { xs: "100%", md: "80%" },
                margin: "5rem 0",
              }}
            >
              <Box sx={{ width: "49%", mb: { xs: "10px", md: "0" } }}>
                {" "}
                <Image src={flowers} alt="flowers and wine" />
              </Box>
              <Box sx={{ width: "49%" }}>
                {" "}
                <Image src={giftr} alt="gift and envelop" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
