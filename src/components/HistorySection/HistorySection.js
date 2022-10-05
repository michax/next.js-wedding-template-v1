import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";
import wavetop from "../../../public/wavetop.svg";
import waveDown from "../../../public/waveDown.svg";


const CORE_VALUES = [
  {
    year: "May 2018",
    title: "Met the modern way",
    description:
      "by swiping right on Tinder (swoon!) ",
  },
  {
    year: "December 2019",
    title: "First date",
    description:
      "First date was a bit of a disaster—it started pouring while we were enjoying our outdoor dinner",
  },
  {
    year: "June 2020",
    title: "Our first Travel",
    description:
      "We traveled extensively—backpacking through Europe in Italy. One of our favorite memories was trying a new gelato place almost every day while visiting Rome.",
  },
  {
    year: "April 2021",
    title: "We moved in together",
    description:
      "After moving, we discovered that we only need a small amount of furniture to feel comfortable.",
  },
  {
    year: "July 2022",
    title: "I said YES !!!!",
    description:
      "During a sunset walk on the beach, Sam got down on one knee.",
  },
  {
    year: "April 2023",
    title: "Wedding",
    description:
      `We're so excited for you to join us as we say "I do" at our wedding. See you soon!`,
  },
];

export const HistorySection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${wavetop.src})`,
          height: "300px",
          width: 1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></Box>
      <Box
        sx={{

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7adc2",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
          }}
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Typography variant="h2" sx={{ mt: { sx: "none", md: '2rem' } }}>Our History</Typography>
            {/* <Typography sx={{ opacity: 0.72 }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography> */}
          </Stack>

          <Timeline position={"alternate"}>
            {CORE_VALUES.map((value, index) => {
              const { title, description, year } = value;
              return (
                <TimelineItem
                  key={title}
                  sx={{
                    "&:before": {
                      display: { xs: "none", md: "block" },
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot sx={{ color: "#FFF", backgroundColor: "#FFF" }} />
                    <TimelineConnector sx={{ color: "#FFF", backgroundColor: "#FFF" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "primary.dark" }}
                    >
                      {year}
                    </Typography>
                    <Paper sx={{ p: '1.5rem', mt: "2rem" }}>
                      <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.9,
                        }}
                      >
                        {description}
                      </Typography>
                    </Paper>

                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${waveDown.src})`,
          height: "380px",
          width: 1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          mb: "1rem",
        }}
      ></Box>
    </>
  );
};
