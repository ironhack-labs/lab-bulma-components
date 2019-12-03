import React from "react";
import NavBar from "../NavBar/NavBar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";


export default class SignUp extends React.Component {
  render() {
    return (
    <div className="App">
    <NavBar></NavBar>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith"></FormField>
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></FormField>
    <FormField label="Password" type="password" placeholder="Introduce new password here"></FormField>
    <CoolButton name="Done"></CoolButton>
    </div>
    );
  }
}