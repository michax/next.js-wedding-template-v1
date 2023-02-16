import { Grid, Typography } from "@mui/material";
import Button from "../FormSection/FormsUI/Button";

const ExistingUserCheck = ({ isExistingUser, isLoading }) => {
  return (
    <Grid item xs={12}>
      {/* Display a message if the user already exists in the database */}
      {isExistingUser ? (
        <Typography variant="body1" sx={{ color: "#FA541c" }}>
          Thank you for your inquiry. We have checked our database and the email
          address provided is already registered for our wedding event. If you
          have any questions or concerns, please let us know.
        </Typography>
      ) : (
        <Button isLoading={isLoading}>Submit form</Button>
      )}
    </Grid>
  );
};

export default ExistingUserCheck;
