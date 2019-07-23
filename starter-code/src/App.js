import React, { Component } from "react";
import Navbar from './components/Navbar';
import CoolButton from "./components/CoolButton";
import Submit from './components/Submit';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Navbar />
          <Submit />
        </div>
      );
    }
  }
  
  export default App;
  