import React, { Component } from "react";
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField'

class SignUp extends Component {
  render(){
    return (
        <form className="form" action="" method="">
          <FormField label="Name" type="text" placeholder="e.g. Gigi" />
          <FormField label="Email" type="email" placeholder="e.g. giselaiff@gmail.com" />
          <FormField label="Password" type="password" placeholder="e.g xxxxxx" />
          <button isPrimary>Login</button>
        </form>
    );
  }
}

export default SignUp