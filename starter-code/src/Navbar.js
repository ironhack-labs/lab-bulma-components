import React from 'react';
import CoolButton from './CoolButton'
import Signup from './Signup'

class Navbar extends React.Component {
    handleClick = (e) => {
        console.log('CONSOLE LOG', e.target);
           
        }
    render() {
        return(
            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
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
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <CoolButton classBtn="button is-rounded my-class is-danger is-small" name="Log In"/>
            </a>
          </p>
          <p className="control">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <CoolButton classBtn="button is-small is-success" name="Sign Up" onClick={this.handleClick}/>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar;