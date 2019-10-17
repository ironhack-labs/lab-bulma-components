import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Message from './components/Message/Message.jsx'

class App extends Component {
    render () {
        return (
            <div className='app-container'>
                <div>
                < Navbar />
                </div>
                <div className='signup-container'>
                < Signup />
                </div>
                <div className='message-container'>
                    < Message />
                </div>
            </div>
        );
    }
}

export default App;