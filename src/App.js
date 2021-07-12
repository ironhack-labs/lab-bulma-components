import React from 'react';
import 'bulma/css/bulma.css';
import Signup from "./signup/Signup"
import Message from './message/Message'
import Container from './container/Container';

const App = () => {
  return (
    <div>
      <Signup />
      <Container>
        <Message isInfo title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </div>
  )
};


export default App;
