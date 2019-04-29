import React from 'react';
import './App.css';
import Signup from './Signup'
import Message from './Message'

function App() {
  return (
    <div className='App'>
    <Signup />
    <Message isInfo title="Hello World">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
    </div>
  );
}

export default App;
