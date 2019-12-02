import React from 'react'

import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'
import Container from './Container'

const SignUp = (props) => {
    return (
        <>
      <Navbar></Navbar>

<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<FormField label="Password" type="password" placeholder="*********" />

<CoolButton className="button is-rounded my-class is-danger is-small" >Submit</CoolButton>
        
<Container className="container"></Container>        

        </>
    )
  }
  
  export default SignUp;
