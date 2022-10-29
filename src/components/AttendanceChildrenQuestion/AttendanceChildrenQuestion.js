import { Box, Checkbox } from "@mui/material";
import React from "react";
import { KidsQuestion } from "../KidsQuestion/KidsQuestion";
import { TeenagerQuestion } from "../TeenagerQuestion/TeenagerQuestion";

export const AttendanceChildrenQuestion = ({values} ) => {
  return (
    <>
      <Box sx={{ mb: "24px", ml: "16px" }}>
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
    </>
  );
};
