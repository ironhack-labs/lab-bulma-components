import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FormField />
      </div>
    );
  }
}

export default App;
