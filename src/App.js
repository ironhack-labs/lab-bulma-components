import React from 'react';
import NavBar from './navbar/Navbar';
import FormField from './formfield/FormField';

const App = () => {

  return  ( <> 
  <NavBar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </>
  );
};

export default App;
