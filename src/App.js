import React from 'react';

import 'bulma/css/bulma.css';

import Signup from './signup/Signup';
import Container from './container/Container';
import Message from './message/Message';

const App = () => {
  return (
    <div> 
    <Container>
      <Signup/>
    </Container>
    </div>
  );
};

export default App;
