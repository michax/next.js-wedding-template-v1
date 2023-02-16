import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const ConfirmedMessage = ({ isComing }) => {
  const confirmationText = isComing
    ? "Thank you for confirming your attendance at our wedding. We are overjoyed to know that you will be joining us on our special day in Santorini.  We can&apos;t wait to celebrate this new chapter of our lives together with all of you. Thank you again for your support and we look forward to seeing you soon!"
    : "Thank you for letting us know that you won't be able to attend our wedding. We will miss you, but we understand that sometimes things come up. We hope to see you soon.";
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
              variant="h3"
              sx={{
                mb: "1rem",
                textAlign: "center",
              }}
            >
              Thank you for your response.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: "50px",
                textAlign: "center",
              }}
            >
              {confirmationText}
            </Typography>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
