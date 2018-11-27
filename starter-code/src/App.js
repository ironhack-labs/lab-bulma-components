import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar.js";
import Container from "./Container.js";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

class App extends Component {

  render(){
    return(
      <section>

        <Navbar />

        <div className="buttons">
            <CoolButton isSuccess isSmall name="Sign Up"/>
            <CoolButton isDanger isSmall name="Log In" className="is-rounded my-class"/>
        </div>

        <Signup />

        <Container />

      </section>
    )
  }

}

// export your component CLASS so that you can display it from other files
export default App;