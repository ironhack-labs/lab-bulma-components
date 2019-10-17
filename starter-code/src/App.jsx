import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Signup from "./components/Signup/Signup.jsx";

class App extends Component {
    render () {
        return (
            <div>
                <div>
                < Navbar />
                </div>
                <div className='signup-container'>
                < Signup />
                </div>
            </div>
        );
    }
}

export default App;