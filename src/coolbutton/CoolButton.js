import React, { Component } from 'react'

class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className={this.props.class}>{this.props.inner}</button>
            </div>
        )
    }
}

export default CoolButton;
