import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formField/FormField'

const App = () => {
  return (
    <div>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
  );
};

export default App;
