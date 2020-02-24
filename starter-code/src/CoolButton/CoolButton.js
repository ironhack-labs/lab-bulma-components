import React, { Component } from "react";
import "./CoolButton.css"

class CoolButton extends Component {
    render() {
        console.log(this.props)

        if (this.props.isDanger) {
            return (
                <button className={"button " + this.props.className + " is-danger"} >{this.props.children}</button>
            )
        }
        return (

            <button className={"button " + this.props.className + " is-success"}>{this.props.children}</button>

        )
    }
}

export default CoolButton;


