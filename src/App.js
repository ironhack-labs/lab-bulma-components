import React from 'react';
import Signup from './signup/Signup';
import Container from './container/Container';
import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div>
      <Signup />
      <br></br>
      <Container/>
    </div>
  )
};

export default App;
