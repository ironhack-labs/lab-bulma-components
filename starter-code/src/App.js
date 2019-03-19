import React, { Component } from "react"
import NavBar from "../components/Navbar"

import FormField from "../components/FormField"

import CoolButton from "../components/CoolButton"

import Signup from "../components/Signup"



class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar/>


{/* <CoolButton isSmall isDanger className="is-rounded my-class"/>
    <CoolButton isSmall isSuccess/> */}

       <Signup />
</div>
    )
  }
}

export default App; 


     