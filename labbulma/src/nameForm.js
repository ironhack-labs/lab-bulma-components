import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component{
 


render (){
    return (
        <form>
            <label>{this.props.label}</label>
            <input type = {this.props.type} placeholder={this.props.placeholder} />
        </form>
    )
}




}


export default Form;