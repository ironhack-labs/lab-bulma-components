import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FormField label="Name" type="text" />
        <FormField label="Email" type="email" />
      </div>
    </div>
  );
};

export default App;

// button is-rounded my-class is-danger is-small
// button is-small is-success
