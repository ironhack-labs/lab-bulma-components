import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formField/formField';
import CoolButton from './coolbutton/coolButton';

const App = () => {
  return (
  <div className="app">
    <Navbar/>
    <div className="form">
      <FormField label="Name"/>
      <FormField label="Email"/>
      <CoolButton/>
    </div>
  </div>
  );
};

export default App;
