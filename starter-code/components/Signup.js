import React, { Component } from "react"
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";


class Signup extends Component {
  render() {
    return (
      <section>
        <Navbar></Navbar>
        <FormField name="name" placeholder="name" type="text"></FormField>
        <FormField name="email" placeholder="email" type="text"></FormField>
        <FormField type="password" name="password" placeholder="password" ></FormField>
        <CoolButton>Submit</CoolButton>

      </section>
    )  
  }

}


export default Signup