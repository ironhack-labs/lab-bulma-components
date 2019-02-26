import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <spam></spam>
        <div className="main container">
          <div className="container">
            <Form label="Name" type="text" placeholder="e.g Alex Smith" />
            <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
      </div>
    );
  }
}