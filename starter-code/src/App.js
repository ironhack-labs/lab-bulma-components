import React, { Component } from "react";
import Navbar from '../components/Navbar.js'
import FormField from '../components/FormField.js'

class App extends Component {
    render() {
    //   return (
        return (

            <div>
            <Navbar />
            <FormField fieldName="Name" fieldType="text" fieldPlaceholder="e.g Alex Smith"/>
            <FormField fieldName="Email" fieldType="email" fieldPlaceholder="e.g. alexsmith@gmail.com"/>
            </div>
            
        
         
      );
    }
  }
  export default App;