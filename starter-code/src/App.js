import React, { Component } from "react"
import "./App.css"
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"


class App extends Component {
  render() {
    return (
      <main className="main">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton/>

      </main>
      )
    }
  }
    


export default App
