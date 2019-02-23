import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Signup from "./Signup.js";
import Message from "./Message.js";


import "bulma/css/bulma.css";

class App extends React.Component {
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

        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>

        <Signup />

        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>

        <Message isDanger title="Coucou">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>

        <Message isDark title="Hey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>

        <Message isPrimary title="Yo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>.
        </Message>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
