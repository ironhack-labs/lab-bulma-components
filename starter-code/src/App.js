import React from "react";
import Signup from "./Signup";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <br/>
        <Message isInfo title="Hello World">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </div>
    );
  }
}

export default App;
