import React, { Component } from "react";
import Navbar from "./components/navbar";
import FormField from "./components/formfield";
import CoolButton from "./components/coolbutton";
import Message from "./components/message";

class App extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton className="button is-small is-danger is-rounded my-class" text="Button 1" />
                <CoolButton className="button is-small is-success" text="Button 2" />
                <h1>Sign up Page</h1>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="************" />
                <CoolButton className="button is-small is-rounded is-primary" text="Button 1" />
                <Message header="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
            </div>
        )
    }
}

export default App;