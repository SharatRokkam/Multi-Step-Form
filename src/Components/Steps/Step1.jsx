import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mb={4}>
        {renderText({
          label: "Personal Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderSelect({
            state,
            name: "gender",
            label: "Gender",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
              { key: "Other", value: "other" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
