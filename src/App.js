import React from 'react';
import Signup from './signup/Signup'
import Container from './container/Container'
import Message from './message/Message'
import 'bulma/css/bulma.css';

const App = () => {

  return (<div>
      <Signup />
      <Container>
        <Message class='is-info' title='Hello World' />
      </Container>
  </div>)
};

export default App;
