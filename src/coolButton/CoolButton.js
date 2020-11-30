import React, { Component } from 'react'

class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className={`button ${this.props.isSmall} ${this.props.isDanger} ${this.props.className}`}>{this.props.children}</button>
            </div>
        )
    }
}

export default CoolButton;
