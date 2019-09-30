
import React, { Component } from 'react'
import Navbar from './components/NavBar/NavBar'
import FormField from './components/FormField/FormField'
import CoolButton from './components/CoolButton/CoolButton'


class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (


      <div className='App'>
        <Navbar></Navbar>
        <div className='container'>
        <FormField label="Name" type="text" placeholder="e.g Benito Camela" />
        <FormField label="Email" type="email" placeholder="e.g. benitocamela@gmail.com" />
        <FormField label="password" type="password" placeholder="*********" />
        <CoolButton></CoolButton>
        </div>
      </div>


    )
  }
}


export default App;