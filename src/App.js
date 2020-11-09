import React, { Component } from "react";
import "./App.css";
import CoolButton from "./coolbutton/CoolButton";
import FormField from "./formfield/FormField";
import Navbar from './navbar/Navbar';
import 'bulma/css/bulma.css'

class App extends Component {
  render(){
    return (  
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="123456789" />
        <CoolButton/>
      </div>
    );
  }
  
};

export default App;
