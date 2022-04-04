import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Headings } from "../Support/Headings/Headings";
import { lightBorder } from "../Theme/borders";
import { SimpleTextField } from "../Support/TextFields/TextFields";
import { SimpleLinks } from "../Support/Link/Links";
import { SimpleButton } from "../Support/Buttons/Buttons";
import { useFormik } from "formik";

function SinInForm(props) {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const handelSinInEvent = (event) => {
    alert("Call the api for sining in to your account...");
  };

  const formic = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Rec email");
      console.log(values.email);
      console.log("Rec password");
      console.log(values.password);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required";
      if (values.password.length < 6)
        errors.password = "Password should be greater then 6 letters ";
      return errors;
    },
  });

  console.log(formic.values.password);

  return (
    <div>
      <form onSubmit={formic.handleSubmit}>
        {/* Title */}
        <div style={{ padding: "1rem" }}>
          <Headings text={"Sin in"} fontSize={30} fontWeight={"bold"} />
        </div>
        <Divider />
        <Grid container>
          <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
            {/* <SimpleTextField 
                                                value={email}
                                                setValue={setEmail}
                                                label="Email"
                                                fullWidth
                                            /> */}
            <input
              type="text"
              name="email"
              value={formic.values.email}
              onChange={formic.handleChange}
              onBlur={formic.handleBlur}
            />
            {formic.errors.email && (
              <span style={{ color: "red" }}>{formic.errors.email}</span>
            )}
          </Grid>
          <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
            {/* <SimpleTextField 
                                                value={password}
                                                setValue={setpassword}
                                                label="Password"
                                                fullWidth
                                            /> */}
            <input
              type="text"
              name="password"
              value={formic.values.password}
              onChange={formic.handleChange}
              onBlur={formic.handleBlur}
            />
            {formic.errors.password && (
              <span style={{ color: "red" }}>{formic.errors.password}</span>
            )}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {/* <SimpleButton
              name="Sin in"
              handelClick={(e) => {
                // setDoHaveAccount(!doHaveAccount)
                handelSinInEvent(e);
              }}
            /> */}
            <button type="submit">Sumit</button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <SimpleLinks
              name={"Don't have account ?"}
              handelClick={() => {
                props.setDoHaveAccount(!props.doHaveAccount);
              }}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SinInForm;
