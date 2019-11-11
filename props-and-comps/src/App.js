import React from "react";
import "./App.css";
import NavBar from "./comps/NavBar";
import FormField from "./comps/FormField";
import CoolButton from "./comps/CoolButton";

function App() {
  return (
    <div>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
