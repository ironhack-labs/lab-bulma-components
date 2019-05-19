import React from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
  )
}

export default App;