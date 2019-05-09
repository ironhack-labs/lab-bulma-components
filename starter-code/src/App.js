import React, { Component } from "react";
// import "./App.css";
import Navbar from "./Navbar.js";
// import FormField from "./Formfield.js";
// import CoolButton from "./Coolbutton.js";
import SignUp from "./Signup.js";

class App extends Component {
    render() {
        return (
            <div className="App">
            <Navbar />
             <SignUp />
            </div>
        );
    }
}

export default App;