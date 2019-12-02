import React, { Component } from "react";
import Navbar from '../components/Navbar.js'
import FormField from '../components/FormField.js'
import CoolButton from '../components/CoolButton.js'
import Signup from '../components/Signup.js'

class App extends Component {
    render() {
        return (

            <div>
            <Navbar />
            <FormField fieldName="Name" fieldType="text" fieldPlaceholder="e.g Alex Smith"/>
            <FormField fieldName="Email" fieldType="email" fieldPlaceholder="e.g. alexsmith@gmail.com"/>
            <div className="buttons">
                <a><CoolButton buttonClass="button is-danger is-rounded my-class is-small" buttonText="Button 1"></CoolButton></a>
                <a><CoolButton buttonClass="button is-success" buttonText="Button 2"></CoolButton></a>
            </div>
            <Signup />
            
            </div>
            
        
         
      );
    }
  }
  export default App;