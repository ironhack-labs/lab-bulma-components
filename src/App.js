import React from "react";
//import './Navbar/node_modules/bulma/css/bulma.css';
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
//import CoolButton from "./coolbutton/CoolButton";
import Signup from './signup/Signup'

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

      <Signup />
    </div>
  );
};

export default App;
