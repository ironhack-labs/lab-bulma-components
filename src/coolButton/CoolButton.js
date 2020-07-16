import React, { Component } from 'react'

export default class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className="button is-danger is-rounded">Rounded</button>
                <button className="button is-success is-hovered">Hover</button>     
            </div>
        )
    }
}



