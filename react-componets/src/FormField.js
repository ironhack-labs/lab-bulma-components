import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class FormField extends Component {
  constructor(props){
    super(props)
    this.state = {
        name: 'Isaiah',
        email: "bro@gmail.com"
    }
}



    render() {
      return (
        <div className="theForm">
          <form>
            <div>
            <label>{this.props.label}</label>
            </div>
            <input placeholder={this.props.placeholder} />
          </form>
        
        </div>
      );
    }
  }








export default FormField;