import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/coolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton className="button is-rounded my-class is-danger is-small">
        Button 1
      </CoolButton>
      <CoolButton className="button is-small is-success">Button 2</CoolButton>
    </div>
  );
};

export default App;
