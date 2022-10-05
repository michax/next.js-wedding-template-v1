import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";
import wavetop from "../../../public/wavetop.svg";
import waveDown from "../../../public/waveDown.svg";


const CORE_VALUES = [
  {
    year: "2021",
    title: "Customer Satisfaction",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    year: "2020",
    title: "Transparency",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    year: "2019",
    title: "Reputation",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    year: "2018",
    title: "Cooperation",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
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
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "secondary.main",
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
          <Typography variant="h2">Our History</Typography>
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
                    <TimelineDot sx={{ color: "secondary.main" }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="subtitle3"
                      sx={{ color: "primary.main" }}
                    >
                      {year}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.72,
                        maxWidth: { md: 360 },
                        ...(index % 2 && {
                          ml: "auto",
                        }),
                      }}
                    >
                      {description}
                    </Typography>
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
          height: "260px",
          width: 1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></Box>
    </>
  );
};