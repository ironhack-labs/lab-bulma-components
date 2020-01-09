import React, { Component } from "react";

class CoolButton extends Component {
    render() {
        return (
            <React.Fragment>
            <button className={this.props.className}>{this.props.name}</button>
            </React.Fragment>
        )
    }
}

export default CoolButton;