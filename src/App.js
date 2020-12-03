import React, { Fragment } from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <FormField type="text" label="Name" placeholder="e.g Alex Smith" />
      <FormField
        type="email"
        label="Email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </Fragment>
  );
};

export default App;
