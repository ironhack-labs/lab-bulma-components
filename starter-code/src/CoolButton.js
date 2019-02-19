import React, { Component } from 'react'


class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className={classButton(this.props)}>{this.props.children}</button>
            </div>
        )

function classButton(props) {
    let className = "button "
    if(props.className) {
        className += props.className
    }
    if(props.isSmall) {
        className += " is-small "
    }
    if(props.isDanger) {
        className += "is-danger "
    }
    if(props.isSuccess) {
        className += "is-success "
    }
    return className
}

    }
}

export default CoolButton;