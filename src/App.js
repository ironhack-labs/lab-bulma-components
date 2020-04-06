import React, { Component } from "react";
import Navbar from './navbar/Navbar.js';
import FormField from './formfield/FormField.js';
import CoolButton from './coolbutton/CoolButton.js';
import 'bulma/css/bulma.css';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar /> 
          <br/><br/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <br/><br/>
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div>
    );
  } 
};

export default App;
