import React from 'react'



const Navbar = () =>{
  return (
    <div>
      <nav className="navbar is-light">
      
        <div className="navbar-brand">
          <a className="navbar-item" href="#"><img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28" /></a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">Home</a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-link" href="#"><span>Login</span></a>
              </p>
              <p className="control">
                <a className="button is-primary" href="#"><span>Sign Up</span></a>
              </p>
            </div>
          </div>
        </div>

      </nav>
    </div>
    )
}
 export default Navbar