import React, { Component } from "react";
import NavBar from "./Components/navBar/navBar"
import FormField from "./Components/FormField/formField"
import CoolButton from "./Components/CoolButton/coolButton"

// import "./App.css";


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar></NavBar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1"></CoolButton>
                <CoolButton isSmall isSuccess name="Button 2"></CoolButton>
            </div>

        );
    }
}

export default App;