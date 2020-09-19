import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./button/CoolButton";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Superman" />
      <FormField label="Email" type="email" placeholder="e.g. your email" />
      <CoolButton isActive buttonText="AYYY" />
      {/* <Signup />  */}
    </div>
  );
};

export default App;
