import React, { Component } from "react";
import 'bulma/css/bulma.css';
import SignUpForm from '../forms/SignUpForm';
import Navbar from "../navbar/Navbar";

class SignUpPage extends Component {
  render(){
    return (
      <div id="signup">
        <Navbar/>
        <div className="columns is-centered">
          <SignUpForm/>
        </div>
      </div>
    );
  }
}

export default SignUpPage