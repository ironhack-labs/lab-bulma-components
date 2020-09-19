import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./button/CoolButton";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <div className="container">
      <Signup />
    </div>
  );
};

export default App;
