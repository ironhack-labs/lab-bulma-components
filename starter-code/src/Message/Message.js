import React from "react";
import "./Message.css";

export default function Message({ title, text, bold }) {
  return (
    <article class="message is-info">
      <div class="message-header">
        <p>{title}</p>
        <button class="delete" aria-label="delete" />
      </div>
      <div class="message-body">
        {text} <strong>{bold}</strong>
      </div>
    </article>
  );
}
