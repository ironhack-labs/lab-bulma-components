import React, { Component } from "react";
import "./App.css"
import Navbar from "../components/nav-bar"
import FormField from "../components/form-field"
import CoolButton from "../components/cool-button"

class App extends Component {
  render(){
    return(
      <div className="container-all">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    )
  }
}
export default App


