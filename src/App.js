import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';

import Container from './components/Container/Container';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <Container>
      <Signup />
    </Container>
  );
};

export default App;
