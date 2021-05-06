//Author: Jorge Sirias
//Ironhack Miami PTWD JAN 2021

import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      
      {/* <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g Alex.Smith@gmail.com"/>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
      <Signup/>

    </div>
    )
};

export default App;
