import React, { Component } from "react";
import CoolButton from "./Button";
import FormField from "./FormField";
import Message from "./Message";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <FormField label="Name" type="text" placeholder="e.g Jorge Legazpe" />
          <FormField
            label="Email"
            type="email"
            placeholder="jorge@legazpe.com"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="choose a strong password"
          />
          <CoolButton className="button is-small is-success">Submit</CoolButton>
        </form>
        <br />
        <br />
        <Message className="message is-info" title="Hello World">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default Container;
