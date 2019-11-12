import React, {Component} from "react";
import CoolButton from "../components/buttons"; 
import NavBar from './navbar';
import FormField from './fields';

class Signup extends Component {
  render (){
  return (
    <div>
      <NavBar />
      <div className="bulma-form">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="e.g. your password" />
      <CoolButton isSuccess>Submit</CoolButton>
      </div>
    </div>

  )
  }
}


export default Signup;