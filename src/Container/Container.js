import React from 'react';
import Message from "../Message/Message";

const Container = props => {
    return (
    <article className="message">
  <div className="message-header">
      <p>{props.title}</p>
      <button className="delete" aria-label="delete"></button>
</div>
    <Message/>
</article>
    );
};
export default Container;
