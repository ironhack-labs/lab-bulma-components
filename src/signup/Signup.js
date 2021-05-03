import React from "react";
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import "bulma/css/bulma.css";
import './SignUp.css';

const SignUp = () => {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="form-div">
          <FormField label="Name" type="text" placeholder="John Doe" />
          <FormField label="Email" type="email" placeholder="john@doe.com"
          />
        </div>
        <div className="buttons"></div>
      </div>
    );
  };
  
  export default SignUp;