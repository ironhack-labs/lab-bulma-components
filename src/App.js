import React from "react";
import Navbar from "../src/navbar/Navbar";
import FormField from "../src/formfield/FormField";
import CoolButton from "../src/coolbutton/CoolButton";
import Signup from "./signup/Signup";
const App = () => {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
};

export default App;
