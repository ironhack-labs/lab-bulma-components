import React, { Fragment } from 'react';

import 'bulma/css/bulma.css';

import Nav from './components/navbar/Nav';
import FormField from './components/formfield/FormField';
import CoolButton from './components/coolbutton/CoolButton';

const App = () => 
  <>
    <Nav/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton/>
  </>
  

export default App;
