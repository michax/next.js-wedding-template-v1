import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useCountdown from "../../hooks/useCountdown";
import Lottie from "lottie-react";

import stopwatch from "../../../public/stopwatch.json";

const style = {
  height: 200,
};

const AnimationWatch = () => {
  return <Lottie animationData={stopwatch} style={style} />;
};

export const CountdownTimer = () => {
  // '10/05/2022 17:47' month/day/year time
  const countdown = useCountdown(new Date("07/08/2023 18:00"));
  return (
    <Box
      sx={{
        pt: "5rem",
        pb: "8rem",
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
        <AnimationWatch />
        <Typography
          variant="h2"
          sx={{
            mb: "3rem",
            mt: "5rem",
            fontSize: { xs: "2.3rem", md: "3rem" },
          }}
        >
          8 July 2023
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: "35em",
            margin: "0 auto",
            fontSize: { xs: ".9rem", sm: "1.1rem" },
          }}
        >
          The sweetest day of my life is coming up, and I will really be excited to see you in:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem" }}>
          {TimeBox(countdown.days, "Days")}
          <Typography
            variant="h2"
            sx={{
              mr: "5px",
              ml: "5px",
              fontSize: { xs: "2.3rem", md: "3rem" },
            }}
          >
            :
          </Typography>
          {TimeBox(countdown.hours, "Hours")}
          <Typography
            variant="h2"
            sx={{
              mr: "5px",
              ml: "5px",
              fontSize: { xs: "2.3rem", md: "3rem" },
            }}
          >
            :
          </Typography>
          {TimeBox(countdown.minutes, "Minutes")}
          <Typography
            variant="h2"
            sx={{
              mr: "5px",
              ml: "5px",
              fontSize: { xs: "2.3rem", md: "3rem" },
            }}
          >
            :
          </Typography>
          {TimeBox(countdown.seconds, "Seconds")}
        </Box>
      </Container>
    </Box>
  );
};

function TimeBox(type, label) {
  return (
    <div>
      <Typography variant="h2" sx={{ fontSize: { xs: "2.3rem", md: "3rem" } }}>
        {type}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {label}
      </Typography>
    </div>
  );
}
