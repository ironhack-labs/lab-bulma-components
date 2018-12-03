import React, { Component } from "react";
import Nav from "./components/nav/nav.js";
import "./components/nav/nav.css";

import FormField from "./components/formField/formField.js"



class App extends Component {
    render() {
        return (
            <div className="App">

                <Nav></Nav>
                <FormField></FormField>
            </div>
        );
    }
}

export default App;