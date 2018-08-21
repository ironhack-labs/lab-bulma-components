import React, { Component } from 'react';

class FormField extends Component{
    render(){
        return (
            <div className="container">
                <span className="has-text-weight-bold">
                    <p className="is-size-5">Name</p>
                </span>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <input class="input is-size-medium" type="text" placeholder="name"/>
                    </div>
                </div>

                <span className="has-text-weight-bold">
                    <p className="is-size-5">Email</p>
                </span>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <input class="input is-size-medium" type="text" placeholder="email"/>
                    </div>
                </div>

                <span className="has-text-weight-bold">
                    <p className="is-size-5">Password</p>
                </span>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <input class="input is-size-medium" type="text" placeholder="password"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormField;