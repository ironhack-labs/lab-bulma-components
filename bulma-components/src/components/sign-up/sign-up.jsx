import './sign-up.css'
import React from "react";
// ^ this is always needed for any react components
import NavBar from "../nav-bar/nav-bar"
import FormField from '../form-field/form-field';
import CoolButton from '../cool-button/cool-button';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. password1" />
        <CoolButton isSuccess>Submit</CoolButton>
    </div>
    );
  }
}

export default SignUp;