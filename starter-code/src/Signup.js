import React, {Component} from "react";
import FormField from "./FormField.js";
import Nav from "./Nav.js";
import CoolButton from "./CoolButton.js";

class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField />
        <CoolButton />
      </div>
    );
  }
}
