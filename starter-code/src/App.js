/*import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import FormField from "./FormField/FormField";
import SpecialButton from "./SpecialButton/SpecialButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>

        <FormField label="name" buttonPlaceholder="Eduardo"></FormField>

        <FormField label="email" buttonPlaceholder="asdf@gmail.com"></FormField>

        <div className="SpecialButtonContainer">
          <SpecialButton buttonName="Button1" color="red"></SpecialButton>

          <SpecialButton buttonName="Button2" color="green"></SpecialButton>
        </div>

      </div>
    );
  }
}

export default App;*/

import React, { Component } from "react";
import Signup from "./Signup/Signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup></Signup>
      </div>
    );
  }
}

export default App;
