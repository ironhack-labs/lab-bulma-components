import React, { Component } from "react";
import Nav from "../src/nav/nav.js"
import Form from "../src/form/form.js"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <Form></Form>
                {/* <Form label="Name" type="text" placeholder="e.g Alex Smith" />
                <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
            </div>
        );
    }
}

export default App;