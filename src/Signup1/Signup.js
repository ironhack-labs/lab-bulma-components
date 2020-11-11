import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../CoolButton/CoolButton";
import Message from "../Message/Message";
import "bulma/css/bulma.css";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="signup">
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
          <p className="control">
            <CoolButton isSmall isInfo className="is-rounded my-class">
              Submit
            </CoolButton>
          </p>
        </form>
      </div>

      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Login
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton> */}
    </div>
  );
};

export default Signup;
