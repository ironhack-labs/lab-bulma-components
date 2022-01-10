import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type='text' placeholder='Peter'/>
      <FormField
        label="Email" type='email' placeholder='abc@abc.de'
      />
    </div>
  );
};

export default App;
