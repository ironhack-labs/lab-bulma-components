import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import Signup from "./signup";
import CoolButton from "./coolbutton/CoolButton";



const App = () => {
  return (
    <div>
      <Signup>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </Signup>
    </div>
  );
};



export default App;
