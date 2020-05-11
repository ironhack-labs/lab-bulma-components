import React, { Component } from 'react'

class FormField extends Component {
    render() {
        return (
            <div>
                <div class="field">
                    <label class="label">{this.props.label}</label>
                    <div class="control">
                        <input class="input" type="text" placeholder= {this.props.placeholder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FormField
