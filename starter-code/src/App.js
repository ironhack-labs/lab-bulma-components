import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <h1> Hello Ironhackers! </h1>
        </div>
    );
  }
}

export default App;