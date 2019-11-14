import React, { Component } from 'react'
import CoolButton from './CoolButton';
import FormField from './FormField';



export class Signup extends Component {
    render() {
        return (
      <>
<nav className="navbar is-transparent">
  <div className="navbar-brand">
  <a className="navbar-item" href="https://bulma.io">
  <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
  </a>
  <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
  <span></span>
  <span></span>
  <span></span>
  </div>
  </div>
          
  <div id="navbarExampleTransparentExample" className="navbar-menu">
  <div className="navbar-start">
  <a className="navbar-item" href="https://bulma.io/">
  Home
  </a></div></div>
  <div className="navbar-end">
  <div className="navbar-item">
  <div className="field is-grouped">

<CoolButton  className={"button is-primary is-focused is-medium"}>Sign up</CoolButton>
<CoolButton  className={"button is-light is-focused is-medium"}>Log in</CoolButton>

</div>
</div>
</div>
</nav>

Name <FormField type={"text"} placeholder={"e.g Alex Smith"}/>
Email <FormField type={"text"} placeholder={"e.g. alexsmith@gmail.com"}/>
Password <FormField type={"password"}/>
<CoolButton  className={"button is-info is-rounded"}> Submit</CoolButton> 
      </>
        )
    }
}

export default Signup
