import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';

export default class App extends Component {

  user = {
    name: 'Vero',
    lastName: 'Lominchar',
    age: 37
  }



  render() {
    return(
      <div className="App">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    );
  }
}