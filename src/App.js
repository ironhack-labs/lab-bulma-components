import React from 'react';
import Navbar from './navbar/Navbar.js';
import FormField from './formField/FormField.js';
import CoolButton from './components/CoolButton.js'
import Signup from './components/Signup.js';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="Firstname Lastname"/>
      <FormField label="Email" type="email" placeholder="name@email.com"/>
      <CoolButton className="button is-rounded my-class is-danger is-small" submit="Button 1"/>
      <CoolButton className="button is-small is-success" submit="Button 2"/>
      <hr/>
      <Signup/>
    </div>
  )
};

export default App;