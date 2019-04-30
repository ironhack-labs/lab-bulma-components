import React from "react";
import "./App.css";
import Navbar from "./Navbar/navbar";
import Formfield from "./Formfield/Formfield";
import CoolButton from "./Button/Button";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="form">
        <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
        <Formfield
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
      <div className="Btns">
        <CoolButton nameB="Button1" className="button is-success" />
      </div>
    </div>
  );
}

export default App;
