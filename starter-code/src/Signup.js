import React, { Component } from 'react'
import "./App.css";
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {
  render() {
    return (
      <section className="signup-container">
        <Navbar />
        <FormField />
        <CoolButton />
      </section>
    )
  }
}

export default Signup