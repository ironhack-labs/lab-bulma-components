import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder={this.props.holderName}/>
                    </div>
                    </div>
                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder={this.props.holderMail}/>
                    </div>
                    </div>
            </div>
        )
    }
}
