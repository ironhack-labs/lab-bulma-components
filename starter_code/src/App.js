import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import Coolbutton from "./Coolbutton";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Formfield />
      <Coolbutton />
      <Signup />
    </div>
  );
}

export default App;
