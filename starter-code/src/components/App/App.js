
import React, { Component } from "react";
import SignUp from "../SignUp/SignUp";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar"
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className='mainBox'>
          <SignUp></SignUp>
          <Container></Container>
        </div>
      </div>
    )
  }
}

export default App;