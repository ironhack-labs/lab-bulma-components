import React from 'react';
import CoolButton from './coolButton/CoolButton';
import FormField from './formField/formField';
import Navbar from './navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="name" type="text" placeholder="eg. Alex Smith" />
      <FormField label="email" type="email" placeholder="eg. alex@smith" />
      <CoolButton classButton="button is-danger is-hovered" />
      <CoolButton classButton="button is-warning is-active" />
    </div>
  )
};

export default App;
