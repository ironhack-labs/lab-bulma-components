import React from 'react';

import 'bulma/css/bulma.css';
// import './App.css';

import Signup from './components/Signup/Signup';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <Signup />
    </Container>
  );
};

export default App;
