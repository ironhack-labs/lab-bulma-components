import React, { Component } from 'react'
import Signup from "../components/Signup"
import Navbar from '../components/Navbar'
import "./App.css"

class App extends Component{
      render(){
       return (
         <div className = "container">
         <Navbar />
         <Signup/>
         </div>
       )
    }
}


export default App