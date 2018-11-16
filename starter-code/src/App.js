import React, {Component} from 'react';
import Navbar from './Navbar'
import Form from './Form'
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form/>
        <Container />
      </div>
    )
  }
}

export default App;