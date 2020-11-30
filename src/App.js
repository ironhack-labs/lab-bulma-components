import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './FormField/FormField';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton/CoolButton';
import Signup from './Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
};

export default App;
