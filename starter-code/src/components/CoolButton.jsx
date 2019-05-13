import React, { Component } from 'react';

class CoolButton extends Component {

    render() {
        return (
            <div>
                <button className={this.props.className + (this.props.isDanger ? " is-danger" : '') + (this.props.isSuccess ? " is-success" : "")}>Submit</button>
            </div>
        );
    }
}

export default CoolButton;