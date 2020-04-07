import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import SignUpForm from "./signUp/SignUpForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <SignUpForm/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
};

export default App;
