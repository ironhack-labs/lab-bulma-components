import React from "react";
import FormField from "./formfield/FormField";
import Navbar from "./navbar/Navbar";
import Signup from "./Signup";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
};

export default App;
