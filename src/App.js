import React from 'react';
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";
import 'bulma/css/bulma.css';
import "./App.css";


const App = () => {
  return (
  
  <div className="App">
  
  <Navbar />
  <Formfield label="Name" type= "text" placeholder="e.g. Alex Smith"/>
  <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/> 
  <CoolButton clsName="button is-rounded my-class is-danger is-small" buttontext= "Button 1" />
  <CoolButton clsName="button is-small is-success" buttontext= "Button 2" />
  <Signup />
  </div> )
};

export default App;
