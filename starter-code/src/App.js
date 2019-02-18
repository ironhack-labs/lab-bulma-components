import React, { Component } from "react";
import SignUp from './components/SignUp/SignUp'
import MessageInput from './components/MessageInput/MessageInput'
import '../public/style.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <MessageInput isWarning title="Warning">This website is under development</MessageInput>
                <SignUp />
            </div>
        );
    }
}

export default App;