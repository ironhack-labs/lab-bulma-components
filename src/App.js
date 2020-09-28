import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'

import Navbar from "./navbar/navbar"
import FormField from "./Formfield/FormField"
import CoolButton from './CoolButton/CoolButton'
import Message from "./Message/message"


function App() {
  return (
    <div className="container">
      
      <Navbar
        login= {<CoolButton isSmall isInfo className='is-rounded my-class'>Login</CoolButton>}
        singup= {<CoolButton isSmall isSuccess>Signup</CoolButton>}
      /> 
      
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Your password" />
      <CoolButton isInfo>Submit</CoolButton>

      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>

    </div>

  )
}

export default App;
