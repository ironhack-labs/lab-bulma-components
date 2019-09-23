import React from "react";
// import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <FormField label="Password" type="password" placeholder="******" />
       
       
        <CoolButton>Submit</CoolButton>
        <CoolButton isSmall isDanger className="is-rounded"> Button 1 </CoolButton>
        <CoolButton isSmall isSuccess> Button 2 </CoolButton>
      </div>
    );
  }
}

export default SignUp;