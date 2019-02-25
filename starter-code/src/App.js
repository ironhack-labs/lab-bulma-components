import React, {Component} from "react"
import "../src/App.css"
import Nav from "./nav"
import FormField from "./form"
import Message from "./message"

class App extends Component {
    render(){
        return(
            <div className="App">
                <h1>hola</h1>
                <Nav />
                <FormField />
                <Message  title="titulo" body="cuerpo"/>
            </div>
        )
    }
}

export default App