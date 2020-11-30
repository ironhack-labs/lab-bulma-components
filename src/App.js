import React from 'react';
import 'bulma/css/bulma.css';
import Nav from './navbar/Navbar'
import FormField from './FormField/FormField'

const App = () => {

  return (
    <main>
      
      <Nav/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
   
    </main>);
};

export default App;
