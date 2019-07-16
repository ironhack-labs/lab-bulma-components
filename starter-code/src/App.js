import React, { Component } from "react";
import NavbarBulma from "./navbarBulma";
import Forms from "./forms";
import CoolButton from "./CoolButton";
import "./App.css";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavbarBulma />
                <Forms />
                <div className="separate">
                    <CoolButton />
                </div>
            </div>
        )
    }
}

export default App;