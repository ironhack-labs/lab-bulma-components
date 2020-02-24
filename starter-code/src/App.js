import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar"
import MyForm from "./FormField";
import CoolButton from "./CoolButton";


class App extends Component {
  render() {
    return (
    <div>
      <NavBar></NavBar>
      <MyForm label="Name" type="text" placeholder="e.g Alex Smith"></MyForm>
      <MyForm label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"></MyForm>
      <MyForm label="Passoword" type="password" placeholder="Enter you password"></MyForm>
      <CoolButton className="button is-success is-rounded my-class">Entrar</CoolButton>
    </div>
    );
  }
}

export default App;