import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/Formfield";
import CoolButton from "./button/CoolButton";
import Message from "./message/Message";
import Signup from "./signup/Signup";

import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton
          className="button is-rounded is-danger"
          type="submit"
          title="Log in"
        />
        <CoolButton
          className="button is-success"
          type="submit"
          title="Sign Up"
        />
        <Message
          className="message is-info"
          title="Hello World"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          strong="Pellentesque risus mi."
        />
        <Signup />
      </div>
    );
  }
}

export default App;
