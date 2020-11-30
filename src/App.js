import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './button/CoolButton'

const App = () => {
  return (
  <>
  <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton />
  </>
    )

};

export default App;
