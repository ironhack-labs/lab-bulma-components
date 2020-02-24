import React from 'react'
import NavBar from './components/NavBar/NavBar'
import FormField from './components/FormField/FormField'
import CoolButton from './components/CoolButton/CoolButton'
import SignUp from './components/SignUp/SignUp'

const App = () => {

  return (
    <>
      <NavBar></NavBar>
      <FormField text='Name' type='text' placeholder='e.g Teo Smith'></FormField>
      <FormField text='Email' type='email' placeholder='e.g teosmith@gmail.com'></FormField>
      <CoolButton title='Boton1' classes='my-class is-rounded is-danger' ></CoolButton>
      <CoolButton title='Boton2' classes='is-success' ></CoolButton>
      <SignUp></SignUp>
    </>
  )
}

export default App