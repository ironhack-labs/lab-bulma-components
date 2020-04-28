import React from 'react';
import Signup from './signup/Signup';
import './App.css';
import Message from './message/Message';

const App = () => {
  return (
    
    <div>
      <Signup/>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
