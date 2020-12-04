import React from "react";
import "./message.css";

const Message = () => {
  return (
    <div className="container">
      <article className="message is-info">
        <div className="message-header">
          <p className="isInfo">Hello world</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Message;
