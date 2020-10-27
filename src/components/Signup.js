import React from "react";
import FormField from "./FormField";
import Button from "./Button";
import "./FormField.css";

export default function Signup() {
  return (
    <div className="submitB">
      <div className="signup">
        <FormField type="text" label="Name" placeholder="Enter your name" />
        <FormField type="email" label="Email" placeholder="Enter email" />
        <FormField
          type="password"
          label="Password"
          placeholder="Enter password"
        />
        <div>
          <Button
            nameofclass="button is-rounded my-class is-danger"
            text="Submit"
          />
        </div>
      </div>
    </div>
  );
}
