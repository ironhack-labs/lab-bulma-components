import React from 'react';
import './App.css'
import CoolButton from './CoolButton/CoolButton';
import Formfield from './Formfield/Formfield';
import Navbar from './Navbar/Navbar';
import Signup from './Signup/Signup';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Formfield label="Name" type="text" text="e.g Alex Smith" />
    <Formfield label="Email" type="email" text="e.g. alexsmith@gmail.com"/>
    <Signup/>
    </div>
    );
};

export default App;
