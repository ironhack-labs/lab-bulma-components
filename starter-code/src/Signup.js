import React, { Component } from "react";
import CoolButton from './CoolButton'


import FormField from './FormField'

class Signup extends Component {
  render() {
    return (
      <div>
        <br/>
        <FormField name ="Name" type="text" placeholder="e.g Alex Smith" />
        <br/>
        <FormField name ="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <br/>
        <FormField name ="Password" type="password" placeholder="ingresa contraseña" />
        <br/>
        <CoolButton type="is-primary" name="Enviar" />  
     </div>
    );
  }
}

export default Signup;