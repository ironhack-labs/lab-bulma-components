import React, { Component } from "react";
import "bulma/css/bulma.css";
import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";

export default class Signup extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div>
     <Navbar></Navbar>
     <form action="">
     <FormField label="Name" type="text" placeholder="Jon Snow" />
     <FormField label="Email" type="email" placeholder="winteriscoming@gmail.com" />
     <FormField label="Password" type="Password" placeholder="******" />
     <CoolButton>Signup</CoolButton>
     </form>
     </div>
    );
  }
}