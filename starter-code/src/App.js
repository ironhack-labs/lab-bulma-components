import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField ph="e.g Peter Pan"></FormField>
      </div>
    );
  }
}
