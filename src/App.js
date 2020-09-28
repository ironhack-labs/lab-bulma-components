import React from 'react'
import './App.css'
// import Navbar from './navbar/Navbar'
// import FormField from './formfield/FormField'
// import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'
import Messagge from './messagge/Messagge'

function App() {
  return (
    <>
      {/* <Navbar />
      <FormField label='Name' type='text' placeholder='e.g Alex Smith' />
      <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
      <CoolButton className='is-primary'>Button 1</CoolButton>
      <CoolButton className='is-success'>Button 2</CoolButton>
      <CoolButton isDanger className='is-rounded'>Button 3</CoolButton> */}
      <Signup />
      <Messagge isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Messagge>
    </>
  )
}

export default App
