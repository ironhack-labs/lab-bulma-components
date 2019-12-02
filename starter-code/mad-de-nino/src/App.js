import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FormField from "./components/formField";
import CoolButton from "./components/CoolButton";
import SignUp from "./components/signUp";
import Message from "./components/message"

function App() {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        className="button is-rounded my-class is-danger is-small"
        text="Button1"
      />
      <CoolButton className="button is-small is-success" text="Button2" />

      <Message isInfo title="Hello World" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi." />


      {/* <SignUp /> */}
    </>
  );
}

export default App;
