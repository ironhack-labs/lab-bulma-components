import React, { Component } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import SignUp from './components/SignUp';

class App extends Component {

  render(){

  return (
<div>
<SignUp />

<Navbar />

<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

<CoolButton isSmall isDanger is-rounded  name="Button 1"></CoolButton>

<CoolButton isSmall isSuccess name="Button 2"></CoolButton>

</div>


  );

  }
}


export default App;

