import React from 'react';
import FormField from './formfield/FormField';
import Navbar from './navbar/Navbar';
import Container from './Container';

const App = () => {
  return (
    <div>
      <Navbar/>
      < FormField  label = "Name"  type = "text"  placeholder = "eg Alex Smith"  / > 
      < FormField  label = "Email"  type = "email"  placeholder = "eg alexsmith@gmail.com"  / >
      
      
        
    </div>
  )
};



export default App;
