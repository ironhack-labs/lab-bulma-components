import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="e.g. Potatoe"
        />
      </div>

      <div>
        <CoolButton
          className="button is-danger is-rounded is-small"
          buttontext="Button 1"
        />
        <CoolButton
          className="button is-small is-success"
          buttontext="Button 2"
        />
      </div>
      <Signup />
    </>
  );
};

export default App;
