import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Signup from './components/Signup/Signup';
import Message from './components/Message/Message';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Signup />
      </Container>
      <Message isInfo title="Hello Ironhackers">I bring you forth this message for yet another delightful reading of a timeless classic: <br></br><br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>

    </div>
  )
};

export default App;
