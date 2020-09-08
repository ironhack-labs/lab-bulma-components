import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './button/CoolButton';
import Signup from './signup/Signup';

class App extends Component {
  render() {
    return (
    	<div className='container'>
    	<Navbar />

    	<FormField label="Name" type="text" placeholder="e.g Superman" />
		<FormField label="Email" type="email" placeholder="e.g. your email" />
		<CoolButton isPrimary buttonText='AYYY' />
		<Signup />
		</div>

    );
  }
}

export default App