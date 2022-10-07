import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import leftdeco from "../../../public/leftdeco.svg";
import rightdec from "../../../public/rightdec.svg";


export const FormSection = () => {
  return (
    <Box
      sx={{
        pt: "8rem",
        pb: "8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: "5rem", }}>
          Confirm your attendance
        </Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Please confirm your attendance no later than 24th March 2023
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "0%", md: "-10%" },
            left: { xs: "40%", sm: "10%", md: "40%" },
            transform: 'translate(-50%,-50%)',
            height: { xs: 'auto', sm: "200px", md: '200px' },
            width: { xs: '450px', sm: "500px", md: '650px' },

          }}
        >
          <Image src={leftdeco} alt="image" />
        </Box>
        <Box sx={{
          mt: "10rem",
        }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
              <Grid item xs={0} sm={1} md={2} >
                {/* svg */}
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                {/* form */}
                <Paper sx={{ height: "700px" }}>xs=6</Paper>
              </Grid>
              <Grid item xs={0} sm={1} md={2}>
                {/* svg */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
