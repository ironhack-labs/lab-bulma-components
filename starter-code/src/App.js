import React, { Component } from "react";
import Navbar from './components/Navbar';
import Formfield from './components/Formfield';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

class App extends Component {
    render() {
        return(
            <div>
                <Navbar/> 
                <br/>
                <Formfield/>
                <br/>
                <CoolButton/>
                <Message/>
            </div>
        )
    }
}

export default App;