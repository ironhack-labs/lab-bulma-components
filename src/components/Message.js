import React from "react";
import 'bulma/css/bulma.css';



function Message (props) {

    const {messageTitle} = props

    return (

        <div className="message-div">
            <article class="message is-info">
                <div class="message-header">
                  <p>{messageTitle}</p>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam          gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                </div>
            </article>
        </div>
    )

}

export default Message;