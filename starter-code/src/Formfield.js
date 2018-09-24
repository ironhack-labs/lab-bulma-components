import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

class Formfield extends Component{
  render () {
    return (
      
      <form>

    <div className="field">
    <label className="label">{this.props.label}</label>
    <div className="control">
      <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
    </div>
  </div>
    </form>

      )
  }
}

export default Formfield;