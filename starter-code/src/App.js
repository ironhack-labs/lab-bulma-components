import React from "react";
import Navbar from "./Navbar";
import FormField from "./Formfield";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

import "./style.css";

const App = props => {
  return (
    <div>
      <Navbar />
      <div className="input-form">
        <FormField label="Name" name="name" />
        <FormField label="Email" name="email" />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
};

export default App;
