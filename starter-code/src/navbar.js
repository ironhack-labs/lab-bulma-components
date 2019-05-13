import React from "react";
import CoolButton from "./CoolButton.js";
class Navbar extends React.Component {
  render(){
    return ( 
      <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"></img>
        </a>
        <a class="navbar-item">Home</a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <CoolButton />
          </div>
        </div>
      </div>
      </nav>
    </div>     
  )
  }
}

export default Navbar;