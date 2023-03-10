import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Professional Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "skill",
            label: "Skills You have",
            options: [
              { key: "Programming", value: "Programming" },
              { key: "Communication", value: "Communication" },
              { key: "Designing", value: "Designing" },
              { key: "not Yet Defined", value: "not Yet Defined" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "workExperence",
            label: "Experence You have",
            options: [
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 1 year", value: "More than 1 year" },
              { key: "1 year", value: "1 year" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobType",
            label: "Choose Work Type",
            options: [
              { key: "Marketting", value: "Marketting" },
              { key: "Official Work", value: "Official Work" },
              { key: "Work from home", value: "Work from home" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "expectedSalary",
            label: " Expected Salary",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid
        container
        component={Box}
        justifyContent="flex-end"
        style={{ margin: "5px" }}
      >
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
