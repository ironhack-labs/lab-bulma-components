import React from 'react'
import CoolButton from "./CoolButton"

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </img></a>
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
          <CoolButton  label="Button 1" className="button is-rounded my-class is-danger is-small"/>

            {/* <a className="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span>
                Login
              </span>
            </a> */}
          </p>
          <p className="control">
          <CoolButton  label="Button 2" className="button is-small is-success"/>
           {/* <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
              <span>Signup</span>
            </a> */}
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar
