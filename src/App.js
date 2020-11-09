import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/navbar.js'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import SignUp from './signup/SignUp'
import Message from './message/Message'
import Container from './container/Container'


const App = () => {
  return (
    <>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
     <CoolButton class="is-danger is-small is-rounded" children="Button1"/>
     <CoolButton class="is-success is-small " children="Button2"/>
      <SignUp/>
      <Container className="is-info" title='Hello World' children=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."/>
    </>
  )
};

export default App;
