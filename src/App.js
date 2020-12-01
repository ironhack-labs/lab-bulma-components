import React, { Component } from "react";
import "./App.css";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import Navbar from "./navbar/Navbar";
import Message from "./Message"; 
import "bulma/css/bulma.css"; 



class App extends Component {
  render(){
    return (  
      <div>
        <Navbar />
        <div className="Form"> 
        <FormField label="Name: &nbsp;" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email: &nbsp;" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password: &nbsp;" type="password" placeholder="123456789" />
         <CoolButton /> 
        </div> 
        <Message />
      </div>
    );
  }

};

export default App;