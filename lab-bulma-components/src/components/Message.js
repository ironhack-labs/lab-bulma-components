import React from 'react';

class Message extends React.Component {

    render(){
        return (
            <article class="message is-info">
            <div class="message-header">
              <p>{this.props.title}</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
            {this.props.children}
            </div>
          </article>
        )
    }
}


export default Message;