import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import Button from '../coolbutton/CoolButton.js'

class Signup extends Component{
  render() {
    return (  
        <div className="app">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="Thibault Delfaud" />
        <FormField label="Email" type="email" placeholder="thibault.delfaud@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <Button isSmall isSuccess>SignUp</Button>
        </div>
        );
    }
}

export default Signup 