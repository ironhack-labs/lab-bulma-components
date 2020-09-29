import React from 'react';
import 'bulma/css/bulma.css';
import FormField from './formfield/FormField';
import Navbar from './navbar/Navbar';
import CoolButton from './coolbutton/CoolButton';

const App = () => {
  return <div>
   <header>
  <Navbar />
  </header> 
  <FormField />
  <CoolButton />
  </div>
};

export default App;
