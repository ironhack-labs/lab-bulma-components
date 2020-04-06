import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Navbar from "../navbar/navbar";
import FormField from "../formField/formField";
import CoolButton from "../coolButton/CoolButton";


class SignUp extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSmall isSuccess>SignUp</CoolButton>
      </div>
    );
  }
}

export default SignUp;