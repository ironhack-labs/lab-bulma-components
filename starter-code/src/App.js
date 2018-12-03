import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar";
import "./components/FormField/FormField.js"
import FormField from "./components/FormField/FormField";
import "./components/CoolButton/CoolButton.js"
import CoolButton from "./components/CoolButton/CoolButton";
import "./components/Signup/Signup.js"
import Signup from "./components/Signup/Signup";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar></Navbar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>

                <Signup></Signup>
                

            </div>
        );
    }
}

export default App;