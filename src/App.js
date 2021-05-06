import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField';



const App = () => {
  return(
  <div>
  <Navbar />
  <FormField 
    label={'Name'} 
    type={'text'} 
    placeholder={'e.g Mayhem Rodriguez'}/>

  <FormField 
  label={'Email'} 
  type={'email'} 
  placeholder={'Mayhem@world.com'}/> 

</div>
  ) 

};

export default App;
