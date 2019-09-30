import React, { Component } from 'react'

export default class FormField extends Component {
    render() {
        return (
            <div>
        <div class="field">
                <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>
            <div class="field">
                <label class="label">Email</label>
            <div class="control">
                 <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
        </div>
        </div>
    );
        
    }
}
