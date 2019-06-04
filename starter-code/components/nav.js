import React from 'react'

const Nav = props =>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className='navbar-brand'>
      <a className='navbar-item' href='/'>
        <img src={props.logo} alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href={props.menuUrl}>{props.menuTitle}</a>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className={props.btnSignup}>
            <strong>{props.signup}</strong>
          </a>
          <a className={props.btnLogin}>
            {props.login}
          </a>
        </div>
      </div>
    </div>
  </nav>
export default Nav