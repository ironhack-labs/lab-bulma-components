import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import Message from "../message/Message"

export default class Container extends Component {
    render() {
        return (
            <div className="message container is-info">
                <Message title="Hello World"/>
            </div>
        )
    }
}
