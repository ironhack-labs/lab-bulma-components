import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Form from "./Form.js";
import { signup } from '../constants/form.js';

class Signup extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <form id="signupForm">
          {
            signup.map((item, index) => {
              return <FormField key={index} label={item.label} type={item.text} placeholder={item.placeholder} />
            })
          }
          <CoolButton isSmall isSuccess>Submit</CoolButton>
        </form>
      </React.Fragment>
    )
  }
}

export default Signup;