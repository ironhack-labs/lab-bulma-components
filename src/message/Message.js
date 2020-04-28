import React from "react";
import "bulma/css/bulma.css";
import "./Message.css"

const Message = ({ className, title }) => {
  return (
    <div className="box">
      
      <article className={"message box-message " + className}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>
  );
};

export default Message;
