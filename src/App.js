import React from 'react';
import Signup from './Signup/Signup';
import Container from './Container/Container';
import Message from './Message/Message';
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <Container 
      cname="container" 
      content={<Signup />}
      content2={<Message title="Hello Props" text="Hello props, I'm a text." cname="message mt-2 mx-6"/>}
      />
  )
};

export default App;
