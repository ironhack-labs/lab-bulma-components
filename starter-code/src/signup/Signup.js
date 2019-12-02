import React from "react";
import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import Message from "../message/Message";


export default class Signup extends React.Component {
  render() {
    return (
      <div id="signup">
        <Navbar></Navbar>
        <div className="section">
        <form action="">
          <Formfield
            label="Name"
            type="text"
            placeholder="e.g. John Doe"
          ></Formfield>
          <Formfield
            label="Email"
            type="email"
            placeholder="e.g. hi@johndoe.com"
          ></Formfield>
          <Formfield
            label="password"
            type="password"
            placeholder="Password"
          ></Formfield>

          <CoolButton isPrimary type="submit">Submit or what</CoolButton>
        </form>


        <Message isInfo title="Hello Wordl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>.
          </Message>
        </div>
      </div>
    );
  }
}