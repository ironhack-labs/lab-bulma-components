import React from "react";

import "./App.css";
import Nav from "./components/nav";
import FormField from "./components/formField";
import CoolButton from "./components/coolButton";

function App() {
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>

      <CoolButton isRounded isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
