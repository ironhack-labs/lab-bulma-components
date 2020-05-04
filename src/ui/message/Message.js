import React from "react";
import "bulma/css/bulma.css";

const Message = ({classtype, title, text}) => {
    return (
      <article className={classtype}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
         <div className="message-body">
                {text}
        </div>
      </article>
    );
};

export default Message;
