import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <Container>
          <Message />
        </Container>
        {/* <CoolButton class="button is-rounded my-class is-danger is-small">
          Button 1
        </CoolButton>
        <CoolButton class="button is-small is-success">Button 2</CoolButton> */}
      </header>
    </div>
  );
}

export default App;
