import React from 'react';
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"/>
          </a>
          </div>
          <div>
          <a role="button" className="btn btn-primary mr-2" >
            Login
          </a>
          <a role="button" className="btn btn-success" >
            Signup
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
