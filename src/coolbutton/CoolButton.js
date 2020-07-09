import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class CoolButton extends Component {
    render() {
        return (
            <div>
                <a className={this.props.buttonClass} href={this.props.link}><span>{this.props.text}</span></a>
            </div>
        )
    }
}

export default CoolButton