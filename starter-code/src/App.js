import React, { Component } from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Navbar from "./Navbar";
import 'bulma/css/bulma.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  render() {

    const navbar = ( 
        <div><Navbar/></div>
    );

    const form = (
        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
    );   
    
    const button = (
        <div>
            <CoolButton className="button is-rounded is-danger" name="Button 1"/>
            <CoolButton className="button isSmall isSuccess" name="Button 2"/>
        </div>
    );

    const signup = (
        <div><Signup/></div>
    );

    return (
      <div className="App">
          {navbar}
          {form}
          {button}
          {signup}
          <h1> Say hello to ReactJS </h1>
          <p>You will learn a Frontend framework from scratch. to bacome a nija developer</p>              
          <button>Awesome!</button>
        
      </div>   
    );
  }
}
export default App;