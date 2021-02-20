import React from 'react';
import 'bulma/css/bulma.css';
import './index.css'
import Navbar from './components/Navbar'
import FormField from './components/FormField'



const App = () => {
  return (
  <div>
  <Navbar/>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
  </div>
  );
};

export default App;
