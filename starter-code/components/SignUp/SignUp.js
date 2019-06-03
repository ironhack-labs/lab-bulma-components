import React from 'react'

import Navbar from '../Navbar/Navbar'
import FormField from '../FormField/FormField'
import CoolButton from '../CoolButton/CoolButton'
import Container from '../Container'
import Message from '../Message'

const SignUp = () => {
    return (
      <Container>
        <Navbar />
        <Message isDanger title="Leti">Hola</Message>
        <form >
          <FormField 
            label="Name" 
            type="text" 
            placeholder="e.g Alex Smith" 
          />
          <FormField 
            label="Email" 
            type="email" 
            placeholder="e.g. alexsmith@gmail.com" 
          />
          <CoolButton isActive isMedium isSuccess>Sign up</CoolButton>
      </form>
    </Container>
    )
  
}
export default SignUp