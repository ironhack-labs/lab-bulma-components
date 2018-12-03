import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar";
import "./components/FormField/FormField.js"
import FormField from "./components/FormField/FormField";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar></Navbar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <h1> Hello Ironhackers! </h1>

            </div>
        );
    }
}

export default App;