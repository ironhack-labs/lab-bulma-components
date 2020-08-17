import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';

import 'bulma/css/bulma.css'
import "./coolbutton/CoolButton.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder='e.g. Alex Smith' />
      <FormField label="Email" type="email" placeholder='e.g. alexsmith@gmail.com' />
      <FormField label="Password" type="text" placeholder='password' />
      <CoolButton className="is-rounded my-class" name={'Submit'}></CoolButton>
    </div>
  ) 
};

export default App;
