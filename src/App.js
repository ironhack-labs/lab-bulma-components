import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./src/formfield/FormField";
import CoolButton from "./src/coolbutton/CoolButton";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" placeholder="e.g. Alex Smith" />
      <FormField label="Email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger isRounded text="Button-1"></CoolButton>
      
    </div>
  );
};

export default App;
