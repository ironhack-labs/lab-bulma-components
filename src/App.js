import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import CoolButton from './CoolButton/CoolButton';
import Signup from './Signup/Signup'

const App = () => {
  return <h1>
  <Navbar />
  <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
  <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
  <CoolButton isSmall isSuccess>Button 2</CoolButton>
  <Signup />

  </h1>;
};

export default App;
