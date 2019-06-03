import React from 'react'

const NavBar = () =>

  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </a>
      <div className="navbar-burger burger" dataTarget="navbarExampleTransparentExample">
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
              <a className="bd-tw-button button" dataSocialNetwork="Twitter" dataSocialAction="tweet" dataSocialTarget="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
              </span>
              </a>
            </p>
            <p className="control">
              <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

export default NavBar