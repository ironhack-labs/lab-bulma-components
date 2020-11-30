import React from 'react';
import 'bulma/css/bulma.css';
import Signup from './SignUp/Signup.js';
import Message from './Message/Message.js';



const App = () => {
  return (
    <>
    <Signup />

    <Message title="Hello World" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    </>
  )
};

export default App;
