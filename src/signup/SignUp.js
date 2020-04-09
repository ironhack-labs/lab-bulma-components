import React, { Component } from 'react';
// import '../formField/FormField.css'
import Navbar from '../navbar/Navbar.js'
import InsertButtons from '../coolButton/InsertButtons'
import FormField from '../formField/FormField'
import 'bulma/css/bulma.css';
import DinamicFormField from '../formField/DinamicFormField.js';

class SignUp extends Component {

  render(){
    return (
      <div className='SignUp'>
        <Navbar />
        <FormField />
        <DinamicFormField className="input" label="Password" type="password" placeholder="********">Password</DinamicFormField>
        <InsertButtons className="InsertCoolButtons button is-info ">Deliver</InsertButtons>
      </div>
    )
  }
}

export default SignUp