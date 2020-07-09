import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class Message extends Component {
    render() {
        return (
          <div>
            <div className="message-header">
              <p>{this.props.title}</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </div>
          </div>
        );
    }
}
