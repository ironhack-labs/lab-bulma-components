import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/Signup';

const App = () => {
  return ( 
  
  
  <div>
  <Navbar/>
  <FormField label="Name" type="text" placeholder="e.g Jamie Garrett" />
  <FormField label="Email" type="email" placeholder="e.g. bigballs@gmail.com" />  
  {/* <CoolButton className="button is-rounded my-class is-danger is-small">Button 1</CoolButton> */}
{/* <Signup/> */}

</div>
  
  )};

export default App;
