import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";
import SignUp from "./signup/SignUp.js";
import Container from "./container/Container.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        label="Button 1"
        className="button is-rounded my-class is-danger is-small"
      />
      <CoolButton className="button is-small is-success" label="Button 2" />
      {/*       <SignUp />
       */}

      <hr></hr>
      <Container />
    </div>
  );
}

export default App;
