import React, { Component } from "react";
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import SignUp from './links/SignUp'
import 'bulma/css/bulma.css';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar /> 
         {/* //No se crear link a signup */}
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <button href=""> Submit</button>
       
      </div>
    );
  } 
};

export default App;