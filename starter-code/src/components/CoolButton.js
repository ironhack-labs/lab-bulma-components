import React, { Component } from 'react';

export default class CoolButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <a className={this.props.className}>{this.props.children}</a>
        );
    }
}