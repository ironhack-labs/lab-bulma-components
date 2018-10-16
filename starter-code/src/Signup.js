import React, { Component } from 'react';
import Nav from '../components/nav.js'
import FormField from '../components/formfield.js'
import Button from '../components/button.js'

class Signup extends Component {
  render() {
      return (
        <div className="Signup">
<Nav/>
<form>
<FormField label="Name" type="text" placeholder="e.g Alex Smith" varName="Name"/>
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" varName="Email" />
<FormField label="Password" type="password" placeholder="******" varName="Password" />
</form>
<Button/>
              </div>
      );
  }
}
  
  export default Signup;