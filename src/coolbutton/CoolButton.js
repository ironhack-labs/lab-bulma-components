import React, { Component } from 'react'

export default class CoolButton extends Component {
    render() {
        return (
            <div className="buttons">
            <button className="button is-primary">Primary</button>
            <button className="button is-success">Success</button>
            <button className="button is-rounded is-warning">Warning</button>
            <button className="button is-danger">Danger</button>
          </div>
        )
    }
}





