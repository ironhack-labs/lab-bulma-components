import React from 'react';
import './App.css';
import Signup from './Signup';
import Message from './Message';

function App() {
  return (
    <div>
      <Signup />
      <br />
      <Message type="message is-info" title="bonus" content="This is working!" />
    </div>
  );
}

export default App;
