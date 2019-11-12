import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navBar/navBar.jsx";
import "bulma/css/bulma.css";
import FormField from "./Components/FormField/FormField.jsx";

function App() {
  return (
    <div className="">
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
  );
}

export default App;
