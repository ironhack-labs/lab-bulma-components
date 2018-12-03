import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1> Hello Ironhackers! </h1>
        
      </div>
    );
  }
}

export default App;