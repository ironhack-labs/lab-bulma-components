import React from "react";
import Signup from "./components/Signup";
import Message from "./components/Message";
import Container from "./components/Container";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Signup />
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
