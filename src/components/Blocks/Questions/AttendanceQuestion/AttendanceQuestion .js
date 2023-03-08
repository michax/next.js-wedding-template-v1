import { FormControl, FormLabel, Grid, Typography } from "@mui/material";
import ConfirmAttendanceRadioFields from "../../../Forms/Fields/ConfirmAttendanceRadioFields/ConfirmAttendanceRadioFields";
import Textfield from "../../../Sections/FormSection/FormsUI/Textfield";

export const AttendanceQuestion = () => {
  return (
    <>
      <Grid item xs={12} sx={{ textAlign: "left", mb: "1rem" }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              color: "#212B36",
              mb: ".5rem",
            }}
          >
            Will you attend to celebrate our special day with us?
          </FormLabel>
          <ConfirmAttendanceRadioFields name="isComing" />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Contact details
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Textfield name="firstName" label="First Name" />
      </Grid>
      <Grid item xs={6}>
        <Textfield name="lastName" label="Last Name" />
      </Grid>
      <Grid item xs={12}>
        <Textfield name="email" label="Email" />
      </Grid>
      <Grid item xs={12}>
        <Textfield name="phone" label="Phone" />
      </Grid>
    </>
  );
};
