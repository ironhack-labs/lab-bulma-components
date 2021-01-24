import React from 'react';
import 'bulma/css/bulma.css';
import {Signup} from './signup/Signup';
import {Message} from './message/Message';
import {Container} from './container/Container';

const App = () => {
  return (
    <React.Fragment>
      <Signup />
      <Container>
        <Message isSuccess title='Hello World'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </React.Fragment>
  );
};

export default App;
