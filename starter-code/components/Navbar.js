import React from "react";
import CoolButton from "./CoolButton"

class Navbar extends React.Component {
  render() {
    const pages = [
      { name: 'Login', button: 'is-info', link: 'https://bulma.io' },
      { name: 'Signup', button: 'is-success', link: 'https://bulma.io' },
    ]

    const navLinks = pages.map((page, i) => {
      return (
        <p className="control" key={'page_' + i}>
          <a href={page.link} >
            <CoolButton className={page.button}>
              {page.name}
            </CoolButton>
          </a>
        </p>
      )
    })

    return (
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
                {navLinks}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar;