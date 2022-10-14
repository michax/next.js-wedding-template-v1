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
  sx,
  ...other
}) {
  return (
    <Card
      sx={{
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

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
