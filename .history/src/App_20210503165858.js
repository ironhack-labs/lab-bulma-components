import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from ''

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField labelTag="Name:" type="text" placeholder="e.g. Count Khimo" />
      <FormField labelTag="Direction:" type="text" placeholder=" e.g. Castle of Thunder and Lightning nº666" />
      <CoolButton />
    </div>
    
  )
};

export default App;
