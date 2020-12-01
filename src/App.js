import React from 'react';
import Navbar from './navbar/Navbar'
import Formfield from './formfield/FormField'
import Signup from './signup/Signup';
import Container from './Container';

import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <hr />
      <Signup />
      <hr />
      <Container class="message is-info" />
    </div>
  )
};

export default App;
