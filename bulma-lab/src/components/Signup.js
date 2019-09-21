import React from 'react';
import '../App.css';

import NavBar from '../components/NavBar'
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton'

class Signup extends React.Component{

  render(){
    return(

      <main>
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
        </a>
    
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
    
          <a class="navbar-item">
            Documentation
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
          <div className="buttons">
              <a className="button is-primary" href="/signup">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <h1> Signup </h1>

    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="password" />

    <CoolButton class="button is-primary is-success" href="#">Submit</CoolButton>
    {/* Or you can pass in the prop on the coolbutton like this --
    CoolButton isDanger isSmall */}









    </main>
      )
  }

}


export default Signup;