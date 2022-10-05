import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

export const LocationParty = () => {
  return (
    <Box
      sx={{
        height: "100vh",
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
        <Typography variant="h1" sx={{ mb: "5rem" }}>
          Location
        </Typography>
        <Container>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid
              item
              xs={12} md={6} lg={6}
            >
              <Stack
                spacing={2}
                sx={{
                  mb: 5,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography variant="h3">Drop Us A Line</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  We normally respond within 2 business days
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Box >

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};
