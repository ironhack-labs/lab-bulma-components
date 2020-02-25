import React from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import Button from "./Button.js";

export default class App extends React.Component {
    render() {
        return (
            <div >
                <Nav />
                <FormField labelName="Name" typeName="text" placeholderText="Alex Smith" />
                <Button />
                <Button isSmall isDanger className="is-rounded my-class">HOLY MOLY</Button>
                <Button isSmall isSuccess>INPUT</Button>

            </div>
        );
    }
}