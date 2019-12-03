import React from "react";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/formField";
import CoolButton from "./CoolButton/CoolButton";
// import Signup from "./Signup/Signup";


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                </Navbar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton className="button is-rounded my-class is-danger is-small">
                    Button 1
      </CoolButton>
                <CoolButton className="button is-small is-success">Button 2</CoolButton>

            </div>
        );
    }
}

