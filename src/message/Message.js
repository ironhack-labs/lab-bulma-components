import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Message.css'

const Message = props => {
    return (
        <article className={props.classes}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" ariaLabel="delete"></button>
            </div>
                <div className="message-body">
                    Lorem ipsum dolor sit amet. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhot, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donem eget, facilisis sodales sem.
                </div>
        </article>
    );
  };

  export default Message