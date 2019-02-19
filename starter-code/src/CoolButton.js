import React, { Component } from 'react';

class CoolButton extends Component {
    render() {
        let className = "button"
        if (this.props.isSmall) {
            className += " is-small";
        }
        if (this.props.isSuccess) {
            className += " is-success";
        }
        if (this.props.isDanger) {
            className += " is-danger";
        }
        if (this.props.className) {
            className += " "+this.props.className;
        }
        return (
            <button className={className}>{this.props.children}</button>
        )
    }
}

export default CoolButton;