import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FormField></FormField>
      </div>
    );
  }
}
