import React from 'react';
import Navbar from './navbar/Navbar'
import Signup from './signup/Signup'
import Container from './container/Container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Signup action="#" method="POST"/>
      </Container>
    </div>
  )
};

export default App;
