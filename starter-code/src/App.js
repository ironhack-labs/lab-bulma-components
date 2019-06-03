import React, { Component } from "react";
import ButtonContainer from "../components/buttonContainer"
import FormContainer from "../components/formContainer"
import Signup from "../components/Signup" 
class App extends Component {
  render() {

    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            </a>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  Home
                </a>
              </div>
            
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <ButtonContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <FormContainer />
        <Signup />
      </div>
    );
  }
}
export default App;
