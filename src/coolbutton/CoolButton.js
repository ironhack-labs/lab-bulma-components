import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className={this.props.buttonClass} href={this.props.link}><span>{this.props.text}</span></button>
            </div>
        )
    }
}

export default CoolButton 