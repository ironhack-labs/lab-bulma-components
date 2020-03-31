import React from "react";
import { Navbar } from "./navbar/Navbar";
import { FormField } from "./formfield/FormField";
import { CoolButton } from "./coolbutton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        isSmall
        isDanger
        Classes="is-rounded my-class"
        ButtonName="Button 1"
      />
      <CoolButton isSmall isSuccess ButtonName="Button 2" />
    </div>
  );
};

export default App;
