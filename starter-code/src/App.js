import React, { Component } from "react";
import Nav from "./Nav.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class App extends Component {
    render() {
        return (

            <div>
                <Nav />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1"/>
                <CoolButton isSmall isSuccess name="Button 2"/>
            </div>
        )
    }
}

export default App;