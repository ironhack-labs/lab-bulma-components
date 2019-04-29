import React from "react";
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Message from "./components/Message"


import "./App.css"

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="container">
                    <Message isInfo title="Hello World">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                    </Message>
                    <Signup></Signup>
                </div>
            </div>
        )
    }
}

export default App;