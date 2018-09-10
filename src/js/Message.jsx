import React from "react";

class Message extends React.Component {
constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

     render() {
    return (

      <article class="message">
  <div class="message-header">
        {this.props.title}
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
  {this.props.message}
  </div>
</article>
    );
  }
}

export default Message;