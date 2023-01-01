// @mui
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
// utils

// components

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

CardDataSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function CardDataSummary({
  title,
  total,
  icon,
  color = "primary",
  colorIcon,
  subTitle,
  sx,
  ...other
}) {
  return (
    <Card
      sx={{
        height: "350px",
        fontSize: "16px",
        width: "100%",
        py: 5,
        boxShadow: "5px",
        textAlign: "center",
        backgroundColor: "#FDFDEC",
        ...sx,
      }}
      {...other}
    >
      <IconWrapperStyle
        sx={{
          color: "#fff",
          backgroundColor: colorIcon,
        }}
      >
        <Box component={Icon} icon={icon} width={30} height={30} />
      </IconWrapperStyle>

      <Typography variant="h3">{total}</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.92, textTransform: "uppercase" }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
      
            mt: "1rem",
            width: "70%",
            fontSize: "15px",

          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Card>
  );
}
