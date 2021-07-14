import React from 'react';
import 'bulma/css/bulma.css';
import "./SignupPage.css";


import CoolButton from './CoolButton';
import FormField from './FormField';
import Message from './Message';


function SignupPage (props) {

    const {label, type, placeholder} = props

    return (

      <div class="columns is-desktop">

        <div class="column is-two-thirds-desktop">
          <h3 id="signup-title" class="title is-3">Sign up :</h3>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="********" />
          <CoolButton id="cool-button" classes="button is-primary is-large" label="Submit" />
        </div>

        <div class="column">
          <Message messageTitle="Hello World!" />
        </div>


      </div>

    )

}

export default SignupPage;