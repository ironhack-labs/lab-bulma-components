import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class CoolButton extends Component {


    render() {
      return (
           
                <button onClick={this.props.changeStyles} style={this.props.styles}>{this.props.children}</button>
           
      );
    }
  }








export default CoolButton;