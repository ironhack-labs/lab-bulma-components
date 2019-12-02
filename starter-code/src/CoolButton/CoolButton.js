import React, { Component } from 'react'

export default class CoolButton extends Component {
    render() {
        return (
            <div>
            <button className={this.props.class}>{this.props.text}</button>
          
            </div>
        )
    }
}