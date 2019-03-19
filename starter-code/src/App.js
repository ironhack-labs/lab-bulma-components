import React, { Component } from "react"
import Navbar from '../components/Navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'
import Signup from "../components/Signup"
import Message from "../components/Message"
import Container from "../components/Container"

class App extends Component {

    render() {

        return (
            <Container>
            <section>
            <main className="App">
            <Navbar />
            <section className="">
            
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

            </section>
            <section className="">
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </section>
            </main>

            <section className="">
                <Signup/>
            </section>

            
                <Message isInfo title="Hello World">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            
            
            
            
            
            </section>
            </Container>
            
            
        )
    }
}

export default App