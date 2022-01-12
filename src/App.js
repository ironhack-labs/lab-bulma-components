import React from 'react';
import Signup from './signup/Signup.js';
import Message from './message/Message.js';

const App = () => {
  return (
    <div className="App">
      <Signup />
      <Message className="is-info" title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;