import React from 'react';
import Navbar from './Navbar/Navbar.js'
import Formfield from './Formfield/Formfield.js';
import Signup from './Signup/Signup.js';
const App = () => {
  return (
    <div className = 'app'>
        <Navbar/>
        <Formfield className = 'name-form' label = 'Name' type = 'text' placeholder = 'Ex: Alex souza'/>
        <Formfield className = 'email-form' label = 'Email' type = 'email' placeholder = 'Ex: example@gmail.com'/>
    </div>

  );
};

export default App;
