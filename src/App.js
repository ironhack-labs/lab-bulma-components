import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formField/FormField'
import CoolButton from './CoolButton/CoolButton'

const App = () => {
  return (
  <div className="App">
    <Navbar/>

    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="email" type="email" placeholder="e.g alexsmith@gmail.com"/>

    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>

    
  </div>);
};

export default App;
