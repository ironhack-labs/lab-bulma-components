import React, { Component } from "react";
import Nav from "../src/nav/nav.js"
import "../src/nav/nav.css"

class App extends Component {
    render() {
        return (
            <div className="App">
            <Nav></Nav>
            {/* <h1>Hello</h1> */}
            </div>
        );
    }
}

export default App;