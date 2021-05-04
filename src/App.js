import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'



const App = () => {
  return (
    <div>
      <Navbar>
      
     
      </Navbar>
      <FormField label1="Name" type1="text" placeholder1="e.g Alex Smith" />
      <FormField label1="Email" type1="email" placeholder1="e.g. alexsmith@gmail.com" />
      
     
    </div>
  )
};

export default App;
