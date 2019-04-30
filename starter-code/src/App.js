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
      <Formfield />
      <CoolButton />
    </div>
  )
}

export default App
