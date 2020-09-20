import React from "react";
import "bulma/css/bulma.css";

const Message = (props) => {
  return (
    <div>
      <article class='message is-info'>
        <div class='message-header'>
          <p>Hello World!</p>
          <button class='delete' aria-label='delete'></button>
        </div>
        <div class='message-body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </div>
      </article>
    </div>
  );
};

export default Message;
