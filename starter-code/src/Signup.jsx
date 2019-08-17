import React from 'react'
import NavBar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Message from './Message'

function Signup (){
  return (
    <div>
    <NavBar/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" /> 
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="password" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
    
    </div>
  );
}

export default Signup;