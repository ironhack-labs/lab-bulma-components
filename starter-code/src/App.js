import React, { Component } from "react"
// import "../public/stylesheets/App.css"
import Navbar from "../components/Navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"
import Signup from "../components/Signup"
import Message from "../components/Message"
import Container from "../components/Container"

class App extends Component {
  render() {
    return (
    <main>
        <Container>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
            <Signup />
            <Message isInfo title="Hello World">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </Message>
        </Container>
    </main>
    )
  }
}

export default App
