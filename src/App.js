import React from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField'
import Button from './Button/Button.js'
import 'bulma/css/bulma.css';

const App = () => {
  return <React.Fragment>
  <Navbar/>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <Button isSmall isDanger className="is-rounded my-class" value='1'>Button 1</Button>
  <Button isSmall isSuccess value='2'>Button 2</Button>
  </React.Fragment>
  
};

export default App;
