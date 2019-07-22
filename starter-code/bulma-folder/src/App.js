import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav/nav'
import FormField from './Components/formfield/formfield'
import CoolButton from './Components/coolbutton/coolbutton'
import Signup from './Components/signup/signup'
function App() {
  return (
    <div className="App">
     <Nav/>
     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
     <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Signup/>
    </div>
  );
}

export default App;
