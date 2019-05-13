import React from 'react';
import './App.css';
import Navbar from './navbar'
import FormField from './formfield'
import CoolButton from './CoolButton'

function App() {
  return (
   <div>
     <Navbar /> 
     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<CoolButton/>
</div>


  );
}

export default App;
