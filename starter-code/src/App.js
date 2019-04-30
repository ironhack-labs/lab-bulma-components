import React from "react";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";
import Message from "./Message/Message";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="text" placeholder="Enter a password" />
      <CoolButton
        className="button  is-danger is-rounded my-class"
        text="Create my account"
      />
      <Message
        title="Hello World"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing
      elit."
        bold="Pellentesque risus mi"
      />
    </div>
  );
}

export default App;
