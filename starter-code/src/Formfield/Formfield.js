import React, { Component } from "react";
import "./Formfield.css"

class Formfield extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>{this.props.label}</label>
                    <input type={this.props.type} placeholder={this.props.placeholder} />
                </form>
            </div>
        )
    }
}

export default Formfield;


