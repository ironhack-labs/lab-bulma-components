import React from 'react';
import Signup from './signup/Signup';
import Message from './message/Message';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <Signup />
      <Message classes="message is-info" title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
};

export default App;