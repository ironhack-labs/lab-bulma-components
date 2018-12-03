import React, { Component } from 'react';
import './App.css';

class CoolButton extends Component {
  render(){
    return (
      <a className={this.props.class} href="#">{this.props.text}</a>
    );
  }
}


export default CoolButton;