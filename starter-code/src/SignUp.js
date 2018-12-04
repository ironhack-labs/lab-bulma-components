
import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import NavBar from './NavBar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js'

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
              <NavBar/>
              <FormField />
              <CoolButton />
            </div>           
        );
    };
};


export default SignUp;