import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import { renderText } from "../Common/DisplayComponent";
import { jsPDF } from "jspdf";
import { renderButton } from "../Common/DisplayComponent";

const FinalStep = ({ data }) => {

  const handleDownload = () => {
    var doc = new jsPDF();
    doc.text(
      10,
      10,
      "First Name: " + data.firstName + 
      "Last Name: " + data.lastName + 
      "Gender: " + data.gender +
      "Email: " + data.email +
      "Highest Degree: " + data.highestDegree +
      "Issued By: " + data.issuedBy +
      "Year of Passing: " + data.yearOfPassing +
      "Applied for: " + data.jobApplyFor +
      "Skills: " + data.skill +
      "Experience: " + data.workExperence +
      "Job Type: " + data.jobType +
      "Salary Expectation: " + data.expectedSalary 

    );

    doc.save("form.pdf");
  };

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
        <Box ml={2}>
          {renderButton({ label: "Download PDF", onClick: handleDownload })}
        </Box>
      </Box>

      {/* {JSON.stringify(data, null, 4)} */}
    </Paper>
  );
};

export default FinalStep;
