import React, { Component } from 'react';
import Nav from './Nav';
import Form from './Signup';

class App extends Component {
  render() {
      return (
      <div>
          <Nav />
          <Form />
      </div>
      );
    }
}

export default App;
