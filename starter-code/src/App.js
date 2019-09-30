
import React, { Component } from "react";
import SignUp from "./components/SignUp";
import Container from "./components/Container";


class App extends Component {
  render(){
    return(
      <div>
       <SignUp></SignUp>
       <Container></Container>
      </div>
    )
  }
}

export default App;