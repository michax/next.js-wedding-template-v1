import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const ConfirmedMessage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper
            sx={{
              pt: "4rem",
              pb: "4rem",
              pl: { xs: "0", md: "2rem" },
              pr: { xs: "0", md: "2rem" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: "1rem",
                textAlign: "center",
                fontSize: { xs: "1.5rem", md: "1.9rem" }
              }}
            >
              Thank you for confirming your attendance at our wedding.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                fontSize: { xs: ".9rem", sm: "1.1rem" },
              }}
            >
              We are so excited that you are going to join us in Santorini to
              celebrate our special day. We are truly blessed to have so many
              wonderful people in our lives that are willing to travel so far to
              be with us as we embark on the greatest adventure of our live. It
              means the world to us!
            </Typography>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
