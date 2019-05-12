import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import App from './App'

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <App />
        <Navbar />
        <FormField label="Passowrd" type="password" placeholder="*******"/>
        <CoolButton />
      </div>
    );
  }
}

export default Signup;
