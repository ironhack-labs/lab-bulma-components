import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButtons from "./components/CoolButton";
import Signup from "./components/Signup";
import Container from "./components/Container";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <Navbar />
          </header>
          <FormField />
          <CoolButtons />
        </div>
        <section>
          <Signup />
          <Message />

        </section>
      </div>

    )
  }
}

export default App;