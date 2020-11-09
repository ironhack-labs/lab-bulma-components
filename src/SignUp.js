import React from 'react';
import Nav from './navbar/Nav';
import FormField from "./formfield/FormField"
import CoolButton from "./coolbutton/Coolbutton"

const SignUp = () => {
  return (
    <div>
      <Nav />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <div className= "inline-button">
      <CoolButton className="button is-rounded my-class is-danger is-small" name="Button1 "/>
      <CoolButton className="button is-small is-success" name="Button1 "/>
         </div>
    
    
    </div>);
};

export default SignUp;