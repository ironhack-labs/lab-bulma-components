import React from "react";
class coolButton extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="CoolButton">
                <button className={this.props.className}>
                    {this.props.name}
                </button>
                {/* <button className="button is-rounded my-class is-danger is-small">Signup</button>
                <button className="button is-small is-success">Login</button> */}
                {/* <button className={this.props.className}>{this.props.buttonName}</button> */}
            </div>
        )
    }
}

export default coolButton;
