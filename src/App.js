import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import FormField from './components/FormField/FormField';
import Signup from './components/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Signup />
      </div>
    )
  }
}

export default App;