import React, { Component } from "react";
import Barra from "../Components/navbar";
import Form from "../Components/FormField";
import Boton from "../Components/CoolButton";
import Signup from "../Components/signup";

export default class App extends Component {
  render() {
    return (
      <div>
        <Barra />
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <Form label="Email" type="email" placeholder="algorinet@gmail.com" />
        <Boton />
      </div>
    );
  }
}
