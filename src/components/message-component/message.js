import React from 'react';
import './message.css';
class Message extends React.Component {
    render() {
        if(this.props.showPopup) {
            console.log(this.props.showPopup)
return (
    <article className="message is-success show">
      <div className="message-header">
        <p>Success</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        <p>Your account is created.</p>
      </div>
    </article>
            );
        }
        return (
            <article className="message is-success hide">
            <div className="message-header">
              <p>Success</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
              <p>Your account is created.</p>
            </div>
          </article>
        );
      
    }
}
export default Message;