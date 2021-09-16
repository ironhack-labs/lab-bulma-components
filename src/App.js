import React from 'react';
import 'bulma/css/bulma.min.css';
import Signup from './signup/Signup.js';
import Container from './container/Container.js'
import Message from './message/Message.js'

const App = () => {
  return (
    <main>
      <Container>
        <Signup />
        <Message isInfo title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </main>
  )
};

export default App;