import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <main>
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </main>
  );
};

export default App;
