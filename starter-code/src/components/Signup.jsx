import React from 'react';
import Navbar from './Navbar.jsx';
import FormField from './FormField.jsx';
import CoolButton from './CoolButton.jsx'
import Message from './Message.jsx'

const Signup = () => {
	return (
  <div>
    <Navbar />
    <FormField
      children="Name"
      type="text"
      placeholder="e.g Alex Smith"
    />
    <FormField
      children="Email"
      type="email"
      placeholder="e.g. alexsmith@gmail.com"
    />
    <FormField
      children="Password"
      type="password"
      placeholder="password"
    />
    <CoolButton className="button is-success">Submit</CoolButton>
    <Message 
			p="This is a message"
			children="I am telling you something through this message."
		/>
  </div>
	)
};

export default Signup;
