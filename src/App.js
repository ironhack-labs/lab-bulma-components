import React from 'react';

import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'
import Message from './message/Message'
import Container from './Container'

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="is-rounded my-class is-small is-danger">Button 1</CoolButton>
        <CoolButton className="is-small is-success">Button 2</CoolButton>
        <Signup />
        <Message />
      </Container>
    </React.Fragment>
  )
};

export default App;
