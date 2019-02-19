import React, {Component} from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";

const name = {
  label: "Name",
  type: "text",
  placeholder: "e.g Alex Smith"
};

const email = {
  label: "Email",
  type: "email",
  placeholder: "e.g. alexsmith@gmail.com"
};

const te = {
  name: "button"
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <FormField
          label={name.label}
          type={name.type}
          placeholder={name.placeholder}
        />
        <FormField
          label={email.label}
          type={email.type}
          placeholder={email.placeholder}
        />
        <CoolButton className="is-small is-rounded is-danger">
          coucou
        </CoolButton>
        <CoolButton className="is-small is-success">coucou</CoolButton>


      </div>
    );
  }
}

export default App;
