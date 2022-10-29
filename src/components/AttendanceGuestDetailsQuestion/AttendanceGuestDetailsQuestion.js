import { FormControl, FormLabel, Grid } from '@mui/material'
import React from 'react'
import ConfirmAttendanceRadioFields from '../ConfirmAttendanceRadioFields/ConfirmAttendanceRadioFields'
import Textfield from "../FormSection/FormsUI/Textfield";


export const AttendanceGuestDetailsQuestion = () => {
  return (
    <>
        <Grid
            item
            xs={12}
            sx={{ textAlign: "left", mb: "1rem" }}
        >
            <FormControl>
                <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{
                        fontWeight: "bold",
                        mb: ".5rem",
                    }}
                >
                    Will you attend to celebrate our special day with
                    us?
                </FormLabel>
                <ConfirmAttendanceRadioFields name="isComing" />
            </FormControl>
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
  )
}
