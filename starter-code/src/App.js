import React, { Component } from 'react'
import NavBar from './components/NavBar'
import FormField from './components/FormField'
import Signup from './components/Signup'
import './App.css'

export default class App extends Component {
    render() {
        return (
          // <div>
          //   <NavBar />
          //   <div>
          //   <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          //   <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          //   </div>
          // </div>
          <div>
            <Signup/>
          </div>
        )
    }
}