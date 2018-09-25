import React, { Component } from 'react';
import './App.css';
import FormField from './FormField.js'
import SignUp from './SignUp.js'

class App extends Component {
  
  render() {
    return (

<section>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        Home
      </a>
    </div>
  </div>
</nav>
<div className="nav-button">
<FormField/>
<SignUp/>
</div>

</section>
    );
  }
}

export default App;
