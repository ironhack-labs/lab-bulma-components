import React, { Component } from "react"
import Nav from "../components/Nav"
import Form from "../components/Form"
import CoolButton from "../components/CoolButton"
import Signup from "../components/Signup"
import Container from "../components/Container"
import Message from "../components/Message"




class App extends Component {
    render() {
      return (
      <main>
        <Nav />
        <Form label="Name" type="text" placeholder="e.g Alex Smith" />
        <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        <Signup />
        <Container>
            <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </Container>
      </main>
      )
    }
  }
  
  export default App
  