import React, { Component } from "react";
import NavBar from "./Components/navBar/navBar"
import FormField from "./Components/FormField/formField"

// import "./App.css";


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar></NavBar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>

        );
    }
}

export default App;