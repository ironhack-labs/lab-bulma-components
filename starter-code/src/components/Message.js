import React from "react";

export default function Message() {
  return (
    <div>
      <article class="message">
        <div className="message-header">
          <p>Hello World</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">Whatever</div>
      </article>
    </div>
  );
}
