import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.css';
import './Signup.css'

const Signup = () => {
    return (
      <div>
        <Navbar />
        <div className="form">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" icon="fa fa-user" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" icon="fa fa-envelope" />
            <FormField label="Password" type="password" placeholder="******" icon="fa fa-key" />
            <CoolButton classes="button is-success" text="Send" />
        </div>
      </div>
    )
  };
  
  export default Signup;