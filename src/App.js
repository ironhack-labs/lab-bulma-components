import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import Signup from "./signup/Signup";
import Container from "./Container/Container";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        label="Button 1"
        className="button is-rounded my-class is-small is-danger"
      />
      <CoolButton label="Button 2" className=" button is-small is-success"/>
      <Signup />
      <Container />
    </div>
  );
};

export default App;
