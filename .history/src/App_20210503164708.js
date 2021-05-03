import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField labelTag="Name:"  />

    </div>
    
  )
};

export default App;
