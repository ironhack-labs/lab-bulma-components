import React from 'react'
import './App.css'

// Components
import Navbar from './navbar/navbar'
import Formfield from './Formfield/Formfield'
import CoolButton from './Coolbutton/CoolButton'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Formfield type='text' label='name' placeholder='enter your name' />
      <Formfield type='email' label='email' placeholder='enter your email' />
      <Formfield type='text' label='password' placeholder='enter a password' />

      <CoolButton className='button is-success' button='Submit' />
    </div>
  )
}

export default App
