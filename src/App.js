import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Coolbutton from "./coolbutton/Coolbutton";

const App = () => {
  return (

    <div className="container">
      <Navbar />
      
      <FormField label="name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="email" type="email" placeholder="e.g alexsmith@gmail.com" />

      <Coolbutton class="button is-rounded my-class is-danger is-small" cta="Button 1" />
      <Coolbutton class="button is-small is-success" cta="Button 2" />
    </div>
    
  )
};

export default App;
