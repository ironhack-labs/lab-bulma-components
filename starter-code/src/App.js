import React, { Component } from "react";
import NavBar from "./Components/navBar/navBar"
import FormField from "./Components/FormField/formField"
import CoolButton from "./Components/CoolButton/coolButton"
import Signup from "./Components/Signup/signup"

// import "./App.css";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Signup/>
            </div>

        );
    }
}

export default App;