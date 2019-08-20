import React, {Fragment}from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton.js'



function App() {
  return (

    <Fragment>


    <Navbar/>

    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />    
    <CoolButton isDanger> Button 1</CoolButton>
    <CoolButton isSuccess>Button 2</CoolButton>




    </Fragment>


  );
};


export default App;
 