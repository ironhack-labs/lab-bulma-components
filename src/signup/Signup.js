import React from "react";
import "bulma/css/bulma.css";

import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import Container from "../container/Container";

function Signup(props) {
  return (
    <div>
      <Navbar />
      <Container>
      <form action="#">
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Jonathan Smith"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="******" />
        <p className="field">
          <CoolButton isSuccess>Submit</CoolButton>
        </p>
      </form>
      </Container>
    </div>
  );
}

export default Signup;
