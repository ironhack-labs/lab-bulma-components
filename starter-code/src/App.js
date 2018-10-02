import React, { Component } from "react"
import "./App.css"
import 'bulma/css/bulma.css';

//Components
import Navbar from "./components/Navbar.jsx"
import Formfield from "./components/Formfield.jsx"
//import Buttons from "./components/Buttons.jsx"
import Signup from "./components/Signup.jsx"
import Message from "./components/Message.jsx"


class App extends Component {
    state = {
        login: true
    }

    isLogueado = (bLoged) => {
        this.setState({login:bLoged})
    }

    render() {
        return (
            <div>
                <Navbar isLogueado={this.isLogueado} />
                <div className="container">
                    {this.state.login ? <Formfield /> : <Signup />}
                    {/* <Buttons /> */}
                </div>
                <div>
                    <Message />
                </div>
            </div>
        )
    }
}

export default App