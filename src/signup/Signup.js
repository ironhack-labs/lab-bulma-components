import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';

const Signup = () => {
  return (
      <div>
        <Navbar className="field column"
          url="https://bulma.io/images/bulma-logo.png"
          item="Home"
          buttonLogin="Login"
          buttonSignup="Home"
        />
         
        <form className="form column is-one-two">
          <FormField 
            label="Name" 
            type="text" 
            placeholder="e.g Alex Smith" 
          />
          <FormField 
            label="Email" 
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField 
            label="Password" 
            type="password"
            placeholder=""
          />
        </form>
      </div>
  )
    
}

export default Signup;