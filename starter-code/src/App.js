import React, { Component } from "react";
import Nav from "./nav/Nav";
import FormField from "./formField/FormField"
import ButtonField from "./button/Button"
import "./App.css"


class App extends Component {
  render() {
    return (
      <div className="todo">
    <Nav/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <ButtonField className='button is-rounded my-class is-small is-danger' value="Button 1"/>
    <ButtonField className="button is-small is-success" value="Button 2"/>
    <form>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="clave" type="password" placeholder="*****" />
    <ButtonField className="button is-small is-success" value="Button 2"/>
    </form>
    </div>
    )
  }
}

export default App