import React from 'react'

/* --- Custom components --- */
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton';

const Signup = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="your name" />
      <FormField label="Email" type="email" placeholder="your email" />
      <FormField label="Password" type="text" placeholder="your password" />
      <CoolButton className="button is-small is-success" name="Submit"/>
    </div>
  )
}

export default Signup