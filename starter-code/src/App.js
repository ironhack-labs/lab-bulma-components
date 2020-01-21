import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import CoolButton from './components/CoolButton.js';
import Signup from './components/Signup.js';


class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="container">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith QB" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="******" />
        <CoolButton className='button is-rounded my-class is-link is-small'>Submit</CoolButton>
        {/* <Signup/> */}
      </div>
    )
  }
}

export default App;


