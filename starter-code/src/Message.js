import React from "react";

const truthFinder = {
  isInfo: "is-info"
};

const Message = props => {
  console.log(props);
  let classOfMessage = "message ";

  for (let key in props) {
    if (props[key] === true) classOfMessage += `${truthFinder[key]}`;
  }
  return (
    <div>
      <article className={classOfMessage}>
        <div className='message-header'>
          <p>{props.title}</p>
          <button className='delete' aria-label='delete'></button>
        </div>
        <div className='message-body'>
          <p>{props.children}</p>
        </div>
      </article>
    </div>
  );
};

export default Message;
