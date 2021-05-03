import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';

const App = () => {
  return (
    <main>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </main>
  );
};

export default App;
