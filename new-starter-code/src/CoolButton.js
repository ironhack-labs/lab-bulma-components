import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import FormField from './FormField';


class CoolButton extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }



  render(){
    return(


<button className = "button is-success">{this.props.text}</button>   


)
  }




}

export default CoolButton;
