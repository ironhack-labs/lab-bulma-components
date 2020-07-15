import React, { Component } from 'react'

export default class CoolButton extends Component {
    render() {
        return (
            <div class="buttons">
            <button class="button is-info">Info</button>
            <button class="button is-success">Success</button>
            <button class="button is-warning">Warning</button>
            <button class="button is-danger">Danger</button>
          </div>
        )
    }
}
