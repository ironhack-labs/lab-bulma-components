import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField'
import CoolButton from './button/CoolButton';
import Signup from './signup/Signup'
import Message from './message/Message'

const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <CoolButton isDanger isSmall text="Button 1"/>
      <Signup/>
      <Message title="Hello World" isInfo>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
};

export default App;
