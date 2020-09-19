import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="alex" />
      <FormField label="Email" type="email" placeholder="hi@ironhack.com" />
      <br />
      <CoolButton />
      {/* <FormField /> */}
    </div>
  );
};

export default App;
