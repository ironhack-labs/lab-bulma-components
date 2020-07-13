import React from 'react';
import './navbar.css'
import 'bulma/css/bulma.css';
import './../buttons/coolbuttons'
import CoolButton from './../buttons/coolbuttons';



const Navbar = () => {

    return (
        <div>
    <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
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

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          
          <p className="control">

                    <CoolButton className='button is-primary' name='Login'/>
            {/* <a className="button is-primary" href="{#}">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Login</span>
            </a> */}
                  </p>
                  <p className="control">
                  <CoolButton className='button is-primary' name= 'Sign Up'/>
                    {/* <a className="button is-primary" href="{#}">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Sign Up</span>
            </a> */}
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>
        
    )

}
export default Navbar