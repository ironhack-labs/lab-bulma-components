import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';
import Signup from './Signup/Signup'


const App = () => {

  return (
    <>

      <Signup />

      {/* <Navbar />


      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />


      <CoolButton name="Button 1" className="button is-danger is-rounded"></CoolButton>
      <CoolButton name="Button 2" className="button is-success"></CoolButton> */}
    </>
  )

};

export default App;
