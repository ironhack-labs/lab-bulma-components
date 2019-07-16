import React, { Component } from "react";
import NavBar from "./Components/NavBar"
import SingUp from "./Components/SingUp";


export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <SingUp></SingUp>
            </div>
        )
    }
}
