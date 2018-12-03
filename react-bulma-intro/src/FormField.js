import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class FormField extends Component {
  // state = { testing: "yo" };

  render() {
    return (
      <div>
        {/* childdate: {String(new Date())}
        {this.state.testing} */}
        <div class="field">
          <label>{this.props.label}</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;


// <div class="field">
//   <label class="label">Email</label>
//   <div class="control">
//     <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
//   </div>
// </div>;