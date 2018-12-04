import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CoolButton extends Component {
  render() {
    return (

      <button onClick={this.props.changeStyle} style={this.props.theStyle}>{this.props.superText}</button>

    );
  }
}


export default CoolButton;
