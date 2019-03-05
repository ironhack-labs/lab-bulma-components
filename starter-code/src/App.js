import React, { Component } from "react";
import NavBar from './NavBar'
import FormField from './FormField'
import Signup from './Signup'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar/>
        <Signup/>

      </div>
    );
  }
}

export default App;