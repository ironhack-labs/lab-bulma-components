import React from "react";
//import './Navbar/node_modules/bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
//import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";
import Message from './message/Message'

const App = () => {
  return (
    <div>
      <h1>Bulma</h1>
      <Navbar />
      <FormField
        label="Name"
        name="User's name"
        type="text"
        placeholder="e.g Alex Smith"
      />
      <FormField
        label="Email"
        name="User's email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
      <Signup />
    </div>
  );
};

export default App;
