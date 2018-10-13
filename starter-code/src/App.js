import React, { Component } from "react";
import NavBar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./Coolbutton.js";
import Signup from "./Signup.js"
// import "./App.css";

class App extends Component {
    render() {
        return (
            <div className='container'>
                <NavBar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger myclass="is-rounded my-class" value="Button 1"/>
                <CoolButton isSmall isSuccess value="Button 2"/>
                <Signup/>

            </div>
            

        )
    }

}

export default App;