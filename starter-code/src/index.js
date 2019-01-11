import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import "bulma/css/bulma.css";

ReactDOM.render(
  <div>
    <App />
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
  </div>,
  document.getElementById("root")
);
