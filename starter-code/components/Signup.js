import React from 'react'

import Nav from '../components/Navbar'
import Formfield from '../components/Formfield'
import CoolButton from '../components/Coolbutton'

function SignUp() {
  return (
    <main>
      <Nav />
      <Formfield label="Name" mauricio="text" placeholder="Name"/>
      <Formfield label="Email" mauricio="email" placeholder="Email"/>
      <Formfield label="Password" mauricio="password" placeholder="Insert your pass"/>
      <CoolButton popino="button is-small is-success" text="Sign up" />
    </main>
  )
}

export default SignUp
