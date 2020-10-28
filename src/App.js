import React from 'react';
import "./App.css";
import 'bulma/css/bulma.css';

import Navbar from "./components/navbar/Navbar";
import Formfield from './components/formfield/Formfield';
import CoolButton from "./components/coolbutton/CoolButton";

import Signup from "./components/signup/Signup"
import Container from "./components/container/Container"

const App = () => {
  return (
    <Container>
      <Signup />
    </Container>
  );
};

export default App;
