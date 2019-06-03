import React, { Component } from "react";
import NavBar from "../components/NavBar"
import "../src/App.css"


class App extends Component {

render () {
  return (
    <div className= "App">
      <NavBar />
      <h1>bulma App</h1>
    </div>
  );
}
}



export default App