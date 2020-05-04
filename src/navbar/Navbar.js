import React from 'react'
import 'bulma/css/bulma.css';
import './Navbar.css'
import CoolButton from '../coolButton/CoolButton';


const Navbar = (props) => {
    return (

<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href={props.linkHome} >
        Home
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="" href= {props.linkLogin} >
            <CoolButton type="submit" styleClass="button my-class is-info is-medium" text="Login"/>
            </a>
          </p>
          <p className="control">
            <a className="" href={props.linkSignUp} >
            <CoolButton type="submit" styleClass="button my-class is-primary is-medium" text="Sign up"/>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}


export default Navbar