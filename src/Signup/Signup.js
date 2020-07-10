import React from 'react';
import 'bulma/css/bulma.css';
import FormField from "../formfield/FormField"
import CoolButton from "../CoolButton/CoolButton"



 const Signup = props  => {
    return (
        <div>
         
        <form>
          <FormField label="Name" type="text" placeholder="e.g. John Smith"/>
          <FormField label="Email" type="email" placeholder="e.g. smit@popo.com"/>
          <FormField label="Password" type="password" placeholder="*******"/>
          <button class="button is-rounded my-class is-danger is-small">Submit</button>
        </form>
  
        </div>
    )
}

export default Signup