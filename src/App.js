import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar/Navbar';
import FormField from './Formfield/FormField';
import Signup from './Signup/Signup';

const App = () => {
  return (

    <main>

      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <Signup />


    </main>
    
    
  )
};

export default App;
