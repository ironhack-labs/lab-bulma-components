import React from 'react';
import './App.css';
import NavBar  from './components/navbar/NavBar';
import FormField  from './components/formfield/FormField';
import  CoolButton from './components/coolbutton/CoolButton';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
