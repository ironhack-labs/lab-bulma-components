import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = (props) =>{

return(

<nav className="navbar is-transparent">
<div className="navbar-brand">
  <a className="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
  </a>
  <div className="navbar-burger" data-target="navbarExampleTransparentExample">
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


  <div className="navbar-end">
    <div className="navbar-item">
    <div class="field is-grouped">
        <p className='control'>
        <button className='button is-primary'>Login</button>
        </p>
        <p className='control'>
        <button className='button is-primary'>Signup</button>
        </p>
      </div>
    </div>
    </div>
</nav>
)
}


export default Navbar;