
import React, { Component } from "react";
import './App.css';
import NavBar from './NavBar'
import FormField from './FormField'
import Signup from './Signup'
import Container from './Container'


class App extends Component {
    render() {
      return (
        <div>
        < NavBar />
        < Signup />
        < Container />
      </div>
      );
    }
  }
  
  export default App;




