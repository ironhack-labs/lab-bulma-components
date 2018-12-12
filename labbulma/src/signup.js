import React, { Component } from 'react';

import './App.css';
import Navbar from './navbar'
import Form from './nameForm'

import CreateButton from './createButton'

class Signup extends Component{



render(){
    return (
        <div>
        <Navbar />
        <Form label ="Name"   type="text" placeholder = "e.g Alex Smith" />
        <Form label ="Email"   type="email" placeholder = "e.g. alexsmith@gmail.com" />
        <Form label ="Passowrd"   type="passowrd" placeholder = "passowrd" />
        <CreateButton />
        </div>

    )
}


}











export default Signup;