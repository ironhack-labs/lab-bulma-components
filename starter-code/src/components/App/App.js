import React from "react";
import NavBar from "../NavBar/NavBar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="form">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      </div>
    );
  }
}


