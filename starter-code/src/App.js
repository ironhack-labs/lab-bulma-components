import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from "./components/Signup";
import Container from "./components/Container";
import Message from "./components/Message";



class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="body">
        <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
       <Container></Container>
       </div>
        
      </div>
    );
  }
}

export default App;