import React from 'react';
import Navbar from './src/navbar/Navbar'
import 'bulma/css/bulma.css';
import FormField from './formfield/FormField';
import './App.css';
import CoolButton from "./coolButton/CoolButton"

const App = () => {
  return (
    <div className='general'>
        <Navbar />
        <FormField label = "Name"
        type = "text"
        placeholder = "e.g Alex Smith" / >
        <FormField label = "Email"
        type = "email"
        placeholder = "e.g. alexsmith@gmail.com" /
        >
        <FormField label = "Password"
        type = "password"
        placeholder = "Your password" / >
        <CoolButton isSmall isSuccess />
    </div>
  );
};

export default App;
