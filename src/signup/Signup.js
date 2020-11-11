import React from "react";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import Message from "../message/Message";
import "bulma/css/bulma.css";
import "./Signup.css";

function Signup() {
  return (
    <div>
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="enter password"
        />
        <CoolButton isSmall isInfo>
          Register
        </CoolButton>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </form>
    </div>
  );
}

export default Signup;
