import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/signup';

const App = () => {
  return (
    <div>
      <Signup />
      {/* <Navbar />
      <FormField label='Name' type='text' placeholder='e.g. Alex Smith' />
      <FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' /> */}
    </div>
  );
};

export default App;
