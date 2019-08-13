import React from "react";

const Message = () => {
  return (
    <article class="message is-info">
      <div class="message-header">
        <p>Hello TAs</p>
        <button class="delete" aria-label="delete" />
      </div>
      <div class="message-body">
        Raluca, You have to copy 1000 times: I will never leave my bootcamp
        students alone on a Friday. <strong>Have a nice day!!</strong>
      </div>
    </article>
  );
};

export default Message;
