import React from 'react'
import CoolButton from '../CoolButton/CoolButton';

export default function Signup(props) {
    return (
        <div>
            <nav className="navbar is-transparent"/>
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
      </a>
      </div>
        </div>

        <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={props.text} />
      </div>
    </div>

    <div>
    <CoolButton isSmall isSuccess text="Submit"></CoolButton>
    </div>
    </div>
    )
}
