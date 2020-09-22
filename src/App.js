import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./button/CoolButton";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Superman" />
      <FormField label="Email" type="email" placeholder="e.g. your email" />
      <CoolButton isActive buttonText="AYYY" />
      {/* <Signup />  */}
      <Signup />
    </div>
  );
};
export default App;