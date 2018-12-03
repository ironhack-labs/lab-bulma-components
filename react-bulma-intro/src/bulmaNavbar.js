import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Bulma extends Component {
  render() {
    return (
    <div>
      <nav className="navbar is-transparent space">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io" />
            <img className="navImg" src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"/>

            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            </div>
        

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home</a>
            </div>
          </div>

          <div class="hello">  
              <button class="bd-tw-button button">SignUp</button>
              <button class="button is-primary">Login</button>
          </div>
      </div>  
    </nav>
      
      </div>
    )
  }
}

export default Bulma;


