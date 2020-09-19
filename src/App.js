import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Superman" />
      <FormField label="Email" type="email" placeholder="e.g. your email" />
      {/* <CoolButton isPrimary buttonText="AYYY" />
      <Signup /> */}
    </div>
  );
};

export default App;
