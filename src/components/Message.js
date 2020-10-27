import React from "react";
import "./App.css";
import "./FormField.css";

export default function Message() {
  return (
    <div className="msg">
      <div className="message">
        <article className="message is-small">
          <div className="message-header">
            <p>Note</p>
            <button className="delete is-small" aria-label="delete"></button>
          </div>
          <div className="message-body">
            <p>enter your name & email & password</p>
          </div>
        </article>
      </div>
    </div>
  );
}
