import React, { Component } from 'react';
import FormField from "./formfield/FormField.js";
import Navbar from "./navbar/Navbar.js";
import 'bulma/css/bulma.css';
import CoolButton from './coolbutton/CoolButton';
import Message from './message/Message';

class Signup extends Component {
    render() {
      return ( <div><Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="**********" />
      <CoolButton isDanger>Submit!</CoolButton>
      <Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
      </div>
      )
    }
  }

export default Signup;