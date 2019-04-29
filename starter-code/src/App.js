import React from "react";
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"


import "./App.css"

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Signup></Signup>
            </div>
        )
    }
}

export default App;