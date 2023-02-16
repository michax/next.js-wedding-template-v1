import { Box, Grid } from "@mui/material";
import Checkbox from "../FormSection/FormsUI/Checkbox";
import { KidsQuestion } from "../KidsQuestion/KidsQuestion";
import { TeenagerQuestion } from "../TeenagerQuestion/TeenagerQuestion";

const ChildrenQuestion = ({ values }) => {
  return (
    <Grid item xs={12}>
      <Box sx={{ mb: "24px", textAlign: "left" }}>
        <Checkbox
          name="isWithChildren"
          label="Will you join with your lovely children?"
        />
      </Box>
      <Box>
        {values.isWithChildren === true ? (
          <>
            <KidsQuestion />
            <TeenagerQuestion />
          </>
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
};

export default ChildrenQuestion;
