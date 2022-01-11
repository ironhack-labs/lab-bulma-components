import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Peter" />
      <FormField label="Email" type="email" placeholder="abc@abc.de" />
      <CoolButton>Button 1</CoolButton>
      <CoolButton>Button 2</CoolButton>

      <Signup />
    </div>
  );
};

export default App;
