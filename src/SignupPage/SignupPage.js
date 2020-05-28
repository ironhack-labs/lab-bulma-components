import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../CoolButton/CoolButton";

function SignupPage(props) {
  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <form className="column is-8" action="/" method="get">
              <FormField
                field="field"
                control="control"
                input="input is-large"
                label="Name"
                type="text"
                placeholder="e.g Alex Smith"
              >
                Name
              </FormField>
              <FormField
                field="field"
                control="control"
                input="input is-large"
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              >
                Email
              </FormField>
              <FormField
                field="field"
                control="control"
                input="input is-large"
                label="Password"
                type="password"
                placeholder="*****"
              >
                Password
              </FormField>
              <CoolButton className="button" type="submit">
                SUBMIT
              </CoolButton>
            </form>
          </div>
        </div>
      </div>
      <div className="hero-foot"></div>
    </div>
  );
}

export default SignupPage;
