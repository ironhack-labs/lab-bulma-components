import React from "react"
import "./Navbar.css"
import CoolButton from "./CoolButton.js"

function Navbar() {

  return <nav className="nav">
    <p>Home</p>
    <div className="buttons">
    <CoolButton first="Sign-up!" sec="log-in!"/>
    </div>
  </nav>
}

export default Navbar