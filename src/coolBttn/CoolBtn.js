import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class CoolBtn extends Component {
    render() {
        return (
            <button class={this.props.details}>{this.props.label}</button>
        )
    }
}
