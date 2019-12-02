import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from "./components/Signup";
import Message from "./components/Message";

function App() {
  return (
    <>
      {/* <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton className="button is-rounded my-class is-danger is-small" text="Button 1"></CoolButton>
      <CoolButton className="button is-primary is-small is-success" text="Button 2"></CoolButton>
       */}
      <Signup />
      <Message
        isInfo
        title="Hello World"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        strong="Pellentesque risus mi."
      ></Message>
      ;
    </>
  );
}

export default App;
