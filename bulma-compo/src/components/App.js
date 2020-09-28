import React from 'react';

import './App.css';
import Signup from './signup/Signup'
import Message from './message/Message'


const App = () => {
  return (
    <>

    <Signup />
    <Message title='Hello World' message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strongMessage=<strong>Pellentesque risus mi</strong> />  

    </>
  )
}

export default App;
