import React, { Component } from "react";
import "./App.css";
import NavBar from "./navBar/NavBar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
            <FormField label="Name" type="text" placeholder="Alex Smith"></FormField>
            <FormField label="Email" type="email" placeholder="alexsmith@gmail.com"></FormField>
            <FormField label="Password" type="passworld" placeholder="yourpassword"></FormField>
            <CoolButton isSmall isSuccess className='button is-rounded my-class is-success'>Submit</CoolButton>
      </div>
    );
  }
}

export default App;