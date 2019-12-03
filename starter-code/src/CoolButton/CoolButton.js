import React from "react";

export default class CoolButton extends React.Component {
    render() {
        return (
            <div className="CoolButton">
                <button className={this.props.className}>{this.props.children}</button>
            </div>
        );
    }
}
