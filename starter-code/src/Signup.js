import React, { Component } from "react";
import CoolButton from './CoolButton'
import FormField from './FormField'

class Signup extends Component {
  render() {
    return (
      <div>
        <br/>
        <FormField name ="Name" type="text" placeholder="IronHacker's name" />
        <br/>
        <FormField name ="Email" type="email" placeholder="example@ironhack.com" />
        <br/>
        <FormField name ="Password" type="password" placeholder="Your password" />
        <br/>
        <CoolButton type="is-large" name="Send" />  
     </div>
    );
  }
}

export default Signup;
