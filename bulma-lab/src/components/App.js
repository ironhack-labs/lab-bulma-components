import React from 'react';

// Styles
import './App.css';

// Custom Components
import Signup from './signup/Signup'
import Message from './message/Message'


const App = () => {
  return (
    <>
      
      <Signup />
      <Message isInfo isSmall title="Hello World" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </>
  )
}

export default App;
