import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import Container from './Container';
import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Signup />
        <Message isInfo title='Hello World' message='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' strong='ellentesque risus mi' />
      </div>
    </>
  )
};

export default App;
