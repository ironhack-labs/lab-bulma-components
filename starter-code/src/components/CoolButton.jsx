import React, { Component } from 'react'

export default class CoolButton extends Component {
    render() {
        return (
            <div>
                <button class="button is-rounded my-class is-danger is-small">Login</button>
                <button class="button is-small is-success">Signup</button>      
            </div>
        )
    }
}
