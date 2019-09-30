import React, { Component } from 'react'
import FormField from "./FormField.js"


export default class Signup extends Component {
    render() {
        return (
            <div>
            <h1>Signup</h1>
                <FormField />
                <div class="field">
                <label class="label">Password</label>
            <div class="control">
                 <input class="input" type="text" placeholder="Password" />
            </div>
        </div>
        <button class="button is-small is-success">Button 2</button>
            </div>
        )
    }
}
