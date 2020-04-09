import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import './App.css';
import 'bulma/css/bulma.css';

function App () {
  return ( 
  <div className="">
   <header>
   <Navbar/>
   <FormField name="Name" email="Email" />
   </header>
    
  </div>
  
    );
};

export default App;

