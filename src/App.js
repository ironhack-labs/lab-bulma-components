import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
// import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";

//jsx version
const App = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Signup />
      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </>
  );
};

//fragments
//label, type and placeholders are props

export default App;
