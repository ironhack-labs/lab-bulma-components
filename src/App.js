import React from 'react';

import Navbar from '../navbar/Navbar'

import Signup from '../signup/Signup'

import Message from '../message/Message'


const App = () => {
  return (
    
    <>
      
      <Navbar/>

      <Signup/>

      <Message Message className = "isInfo" title = "Hello World" > "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>."</Message>
    
    </>

  )

};

export default App;
