import React, { Component } from 'react';
import FormField from './FormField';
import Navbar from './Navbar';
import CoolButton from './CoolButton';
import Message from './Message';

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <FormField fLabel="Name" fType="text" fPlaceholder="e.g Alex Smith" />
        <FormField fLabel="Email" fType="email" fPlaceholder="e.g. alexsmith@gmail.com" />
        <FormField fLabel="Password" fType="password" fPlaceholder="******" />

        <CoolButton name="Button 1" className="button is-small is-danger is-rounded" />
        <CoolButton name="Button 2" className="button is-small is-success" />

        <Message title="Hello World" />

      </div>
    );
  }
}

export default Signup;