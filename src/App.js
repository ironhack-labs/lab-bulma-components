import React from 'react';
import FormField from './formfield/FormField';
import Navbar from './navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </div>
  );
};

export default App;
