import React from 'react';
import Navbar from './components/Navbar.js'
import FormField from './components/FormField.js'
import CoolButton from './components/CoolButton.js'
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <FormField type="text" placeHolder="e.g. Alex Smith" label="Name"/>
      <FormField type="email" placeHolder="e.g. alexsmith@gmail.com" label="Email"/>
      <CoolButton isRounded isDanger isSmall> Button 1</CoolButton>
      <CoolButton isSmall isSuccess> Button 2</CoolButton>
    </div>
  );
}

export default App;
