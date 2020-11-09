import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar"
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';

const App = () => {
  return (
    <div>
    <Navbar />
    <CoolButton />
    <FormField />
    </div>
  );
};

export default App;
