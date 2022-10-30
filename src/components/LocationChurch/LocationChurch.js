import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

import church from "../../../public/church.svg";
import wine from "../../../public/wine.svg";

import Image from "next/image";

//https://www.npmjs.com/package/google-map-react
//https://leafletjs.com/index.html

const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15993.067311743673!2d10.67386275!3d59.92992835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416d95a2fd9315%3A0xb5d6eb5de3a26594!2sNorwegian%20Radium%20Hospital!5e0!3m2!1spl!2sno!4v1665298540040!5m2!1spl!2sno" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

export const LocationChurch = () => {
  return (
    <Box
      id="Location"
      sx={{
        pb: "15rem",
        pt: "5rem",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: "5rem",
            mt: "5rem",
            textAlign: "center",
            fontSize: { xs: "2.4rem", md: "3.1rem" },
          }}
        >
          Location
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: "2.5rem", textAlign: "center" }}>
              Join us for the wedding{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                }}
              >
                <Image src={church} alt="icon church" />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  mt: "1.5rem",
                  textAlign: "center",
                  fontSize: { xs: ".9rem", sm: "1.1rem" },
                }}
              >
                The Wedding will take place in Saint Pro-Cathedral 83
                Marlborough Street, Oslo at 10.00 a.m
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  textAlign: "center",
                  mt: "1.5rem",
                  fontSize: { xs: ".9rem", sm: "1.1rem" },
                }}
              >
                Up to three hours free parking is available in town
              </Typography>
              <a
                href="https://goo.gl/maps/3q59iGCWT1WseYMK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#f2779a",
                    mt: "1em",
                    textDecoration: "underline",
                    fontSize: { xs: ".9rem", sm: "1.1rem" },
                  }}
                >
                  see the map
                </Typography>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{ mb: "2.5rem", textAlign: "center" }}>
              Join us for the party
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                }}
              >
                <Image src={wine} alt="icon wine" />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  textAlign: "center",
                  mt: "1.5rem",
                  fontSize: { xs: ".9rem", sm: "1.1rem" },
                }}
              >
                Dinner and dancing will take place in Castleknock Hotel &
                Country Club Castleknock, Oslo
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "20rem",
                  textAlign: "center",
                  mt: "1.5rem",
                  fontSize: { xs: ".9rem", sm: "1.1rem" },
                }}
              >
                Up to three hours free parking is available in town
              </Typography>
              <a
                href="https://goo.gl/maps/3q59iGCWT1WseYMK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#f2779a",
                    mt: "1em",
                    textDecoration: "underline",
                    fontSize: { xs: ".9rem", sm: "1.1rem" },
                  }}
                >
                  see the map
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
