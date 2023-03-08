import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";


import React from "react";
import wavetop from "../../../../public/wavetop.svg";
import waveDown from "../../../../public/waveDown.svg";
import travelImg from "../../../../public/travelImg.svg";
import flameWedding from "../../../../public/flame-wedding.svg";
import flameEcology from "../../../../public/flame-ecology-care.svg";
import dinner from "../../../../public/dinner.png";
import phoneDate from "../../../../public/phoneDate.png";
import engagement from "../../../../public/engagement.svg";
import Image from "next/image";

const CORE_VALUES = [
  {
    year: "May 2018",
    title: "From Swipe to Soul Mate",
    description: "We met in the modern way by swiping right on Tinder (swoon!) ",
    img: phoneDate,
  },
  {
    year: "December 2019",
    title: "First date",
    description:
      "Our first date was off to a great start, until it started pouring rain while we were enjoying our outdoor dinner.",
    img: dinner,
  },
  {
    year: "June 2020",
    title: "Adventuring Together",
    description:
      "We traveled extensively—backpacking through Europe in Italy. One of our favorite memories!",
    img: travelImg,
  },
  {
    year: "April 2021",
    title: "We moved in together",
    description:
      "After moving, we discovered that.. we only need a small amount of furniture to feel comfortable.",
    img: flameEcology,
  },
  {
    year: "July 2022",
    title: "I said YES !!",
    description: "During a sunset walk on the beach, Lucas got down on one knee.",
    img: engagement,
  },
  {
    year: "April 2023",
    title: "Wedding day",
    description: `We're so excited for you to join us as we say "I do" at our wedding. See you soon!`,
    img: flameWedding,
  },
];

export const HistorySection = () => {
  return (
    <>
      <Box
        id="our-story"
        sx={{
          backgroundImage: `url(${wavetop.src})`,
          height: {xs:"200px",md:"340px"},
          width: 1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
            <Typography
              variant="h2"
              sx={{
                mt: { sx: "none", md: "2rem" },
                mb: "5rem",
              }}
            >
              Our Story
            </Typography>
          </Stack>

          <Timeline position={"alternate"}>
            {CORE_VALUES.map((value, index) => {
              const { title, description, year, img } = value;
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
                    <TimelineDot
                      sx={{ color: "#FFF", backgroundColor: "#FFF" }}
                    />
                    <TimelineConnector
                      sx={{ color: "#FFF", backgroundColor: "#FFF" }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                    <Typography variant="subtitle1">{year}</Typography>
                    <Paper
                      sx={{
                        p: "1.5rem",
                        mt: "2rem",
                        backgroundColor: "#FCFFF7",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ flex: 2, ml: "10px", mr: "10px" }}>
                          <Typography
                            variant="h3"
                            sx={{
                              mt: 0.5,
                              mb: 1,

                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: { xs: "center", sm: "left" },
                              mt: "1rem",
                              mb: { xs: "1rem", sm: "0" },
                            }}
                          >
                            {description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            flex: 1,
                          }}
                        >
                          <Image src={img} alt="image" />
                        </Box>
                      </Box>
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
