import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div>
                <from action="send" method="post">
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
                    <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder={this.props.holderMail}/>
                    </div>
                    </div>
                    <div class="field">
                    <button type="submit" className="button is-success is-hovered">Send</button>     
                    </div>
                    </from>
            </div>
        )
    }
}
