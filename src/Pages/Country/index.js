import React from "react";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import Header from "../UserDashboard/Header";
import { userPageStyles } from "../UserDashboard/styles";
import { useFormStyles } from "./styles";
import Form from "./form";

const CountryDetails = () => {
  const { code } = useParams();
  const classes = userPageStyles();
  const formClasses = useFormStyles();

  return (
    <div className={classes.pageContainer}>
      <Header title={`Country ${code}`} />
      <Paper className={`${classes.paper} ${formClasses.formContainer}`}>
        <Form code={code} />
      </Paper>
    </div>
  );
};

export default CountryDetails;
