import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/Formfield.js";
// import CoolButton from "./coolButton/CoolButton";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Justine Jeanne" />
      <FormField
        label="Email"
        type="email"
        placeholder="justinejeanne@gmail.com"
      />
      <CoolButton />
      <Signup />
      <FormField label="Name" type="text" placeholder="Justine Jeanne" />
      <FormField label="Email" type="email" placeholder="justine@gmail.com" />
      <FormField label="Password" type="password" placeholder="********" />
      <CoolButton type="submit" isPrimary>
        Submit
      </CoolButton>
    </div>
  );
};

export default App;
