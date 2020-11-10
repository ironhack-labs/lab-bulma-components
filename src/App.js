import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./CoolButton/CoolButton";
import Signup from "./signup/Signup";
import "./app.css";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
      <div>
        <CoolButton
          isSmall
          isDanger
          className="is-rounded my-class"
        ></CoolButton>
      </div>
      <div>
        <Signup></Signup>
      </div>
    </div>
  );
};

export default App;
