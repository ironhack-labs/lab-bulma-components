import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Signup />
    </div>
    
  )
};

export default App;
