import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import SignUp from "./SignUp.js";
import Container from "./Container.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <SignUp/>
          <CoolButton text="kikou"/>
        </Container>
      </div>
    );
  }
}

export default App;
