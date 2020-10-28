import React from 'react';

import 'bulma/css/bulma.css';

import './App.css';

import Navbar from './components/Navbar/Navbar';

import Formfield from './components/Formfield/Formfield';

import CoolButton from './components/CoolButton/CoolButton';

const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton>Button 1</CoolButton>
    </div>
  );
};

export default App;
