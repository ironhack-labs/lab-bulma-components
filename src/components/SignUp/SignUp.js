import React from "react";

// Css style
import "./SignUp.css";

// Components
import CoolButton from "../FormField/CoolButton";

function SignUp() {
  return (
    <div className="signup-container">
      <h1>SIGN UP TODAY!</h1>
      <div className="signup_form">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="**********" />
          </div>
        </div>
      </div>
      <CoolButton />
    </div>
  );
}

export default SignUp;
