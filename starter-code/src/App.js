import React, { Component } from "react"
import Navbar from "../components/Navbar"
import FormField from "../components/FormField"
import CoolButton from "../components/CoolButton"
import Signup from "../components/Signup"
import Message from "../components/Message"




class App extends Component {

    render() {
       

        return (
            <main>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
            <Signup />
            <Message isInfo title="Hello World"/>
               

            </main>
        )
    }
}

export default App















