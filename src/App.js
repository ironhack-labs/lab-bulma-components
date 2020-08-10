import React from "react";
import "./formfield/FormField.css";
import "./coolbutton/CoolButton.css";
import "./signup/SignUp.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import SignUp from "./signup/SignUp";
import Container from "./container/Container";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <SignUp />
      <section className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      </section>
      <section className="form">
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </section>
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
      <section className="info">
        <Container />
      </section>
    </div>
  );
};

export default App;
