import React, { Component } from "react";
import Navbar from "./navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

// import "./App.css";
// import ProductGrid from "./ProductGrid";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
