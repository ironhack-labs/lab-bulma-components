import React, { Component } from "react";
import Navbar from "./Components/Navbar.js"
import FormField from "./Components/FormField.js"
import CoolButton from "./Components/CoolButton.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        <CoolButton isPrimary>Submit</CoolButton>
      </div>



    </div>
  );
}

export default App;