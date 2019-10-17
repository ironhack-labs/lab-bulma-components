import React from "react";
import Signup from "../components/Signup";
import Container from "../components/Container"
import Message from "../components/Message"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Signup />
          <Message title="Hello World" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." messageStrong=" Pellentesque risus mi." />
        </Container>
      </div>
    )
  }
}

export default App;