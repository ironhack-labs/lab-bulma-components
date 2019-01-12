import React, { Component } from 'react';

export default class CoolButton extends Component {
    state = {
        isPrimary: (val) => val ? 'is-primary' : '' ,
        isSuccess: (val) => val ? 'is-success' : '' ,
        isDanger: (val) => val ? 'is-danger' : ''
    };

    render(){
        return (
            <p className="control">
                <a className={`bd-tw-button button ${this.props.className} ${this.state.isPrimary(this.props.isPrimary)} ${this.state.isSuccess(this.props.isSuccess)} ${this.state.isDanger(this.props.isDanger)}`} data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href={this.props.href}>
                <span>{this.props.children}</span>
                </a>
            </p>
        )
    }
}