import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";



const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Signup/>
      {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton name = "button 1" isSmall isDanger className="is-rounded my-class"></CoolButton>
      <CoolButton name = "button 2" isSmall isSuccess></CoolButton> */}
      
    </div>
  );
};

export default App;
