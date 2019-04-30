import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./Navbar"
import FormField from "./FormField"
import Button from "./CoolButton"

function signup() {
  return (
    <div className="signup">
      < Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
			<FormField label="Password" type="password" placeholder="something secret!" />
      <Button className="button is-primary" value="Submit"/>
    </div>
  );
}

export default signup;
