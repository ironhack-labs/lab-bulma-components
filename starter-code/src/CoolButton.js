import React from "react";

class CoolButton extends React.Component {
    render() {
        let className = `button ${this.props.className}`;
        return (
            <button className={className}>{this.props.children}</button>
        )
    }
}

export default CoolButton;