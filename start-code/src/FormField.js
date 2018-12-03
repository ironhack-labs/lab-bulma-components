import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class FormField extends Component {
    render(){
        return(
            <div className="form">

            <label> name</label>
            <input label="Name" type="text" placeholder="e.g Alex Smith" />

            </div>
        )
    }
}



export default  FormField