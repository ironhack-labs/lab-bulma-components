import React, { Component } from "react";
import "./App.css";
import Navbar from './Navbar'
import Signup from './Signup'
import Message from './Message'

class App extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <Message title="Hello World" />
                <Signup />
            </div>
        );
    }
}

export default App;