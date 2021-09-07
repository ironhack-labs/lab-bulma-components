import React from 'react';
import Navbar from './Navbar/navbar';
import FormField from './Formfield/formfield';
import CoolButton from './CoolButton/CoolButton';


// JSX version


const App = () => {
  return (
    <div>
      <Navbar />;
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Senha" type="password" placeholder="digite uma senha" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    </div>
  )
};

export default App;
