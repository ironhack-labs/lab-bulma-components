import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a href="https://www.google.com" className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
            />
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar