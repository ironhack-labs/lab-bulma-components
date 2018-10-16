import React, { Component } from "react";
// import NavBar from "bulma";
import "./App.css";

class Button extends Component {
    render() {
        return (
            <div>
                <button className={`${this.props.isSmall && "class-one"} ${this.props.isDanger && "class-danger"}`} >SUBMIT</button>
            </div>
        )
    }
}

export default Button;