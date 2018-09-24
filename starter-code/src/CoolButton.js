import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
// import bulmaButtons from './index'

class CoolButton extends Component{
  render () {
    return (

      <div>

    <button className={this.props.class}>{this.props.children}</button>


    </div>
      )
  }
}

export default CoolButton;