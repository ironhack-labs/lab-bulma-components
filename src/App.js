import React from 'react';
import Navbar from './src/navbar/Navbar'
import 'bulma/css/bulma.css';
import FormField from './formfield/FormField';
import './App.css';

const App = () => {
  return (
    <div className='general'>
      <Navbar />
      <FormField
        label="Name"
        type="text"
        placeholder="e.g Alex Smith"
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

    </div>
  );
};

export default App;
