import React from "react";
import Navbar from "../src/navbar/Navbar";
import FormField from "../src/formfield/FormField";
import CoolButton from "../src/CoolButton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" placeholder="e.g Adam West" />
      <FormField label="Email" placeholder="123@gmail.com" />
      <CoolButton
        className="button is-rounded my-class is-danger is-small"
        html="Button 1"
      />
      <CoolButton className="button is-small is-success" html="Button 2" />
    </div>
  );
};

export default App;
