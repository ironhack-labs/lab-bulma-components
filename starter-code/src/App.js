import React from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";

export default class App extends React.Component {
    render() {
        return (
            <div >
                <Nav />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        );
    }
}