import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/nav-bar/nav-bar"
import FormField from './components/form-field/form-field';
import CoolButton from './components/cool-button/cool-button';

function App() {
  return ( 
    <div>
      <NavBar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
