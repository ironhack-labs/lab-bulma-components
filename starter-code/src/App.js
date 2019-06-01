import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import Signup from "./components/Signup.js";
import { login, signup } from "./constants/form.js";

class App extends Component {
  render() {

    console.log(login);
    console.log(signup);
    return (
      <React.Fragment>
        <Navbar />
        <Form items={login} id="formLogin"/>
        {/* <Form items={signup} id="formSignup"/> */}
        <Signup />
      </React.Fragment>
    );
  }
}

export default App;