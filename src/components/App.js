import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Navbar'
import Signup from './Signup.js'
import Container from './Container'




function App() {
  return (
    <>
      <Navbar />
      <Signup />
      <Container/>
    </>
  );
}

export default App;
