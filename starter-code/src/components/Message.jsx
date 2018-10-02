import React from 'react'

const Message = () =>{
    return (
        <div>
             <article class="message is-info">
               <div class="message-header">
                <p>Hello World</p>
              <button class="delete" aria-label="delete"></button>
               </div>
            <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </div>
            </article>
        </div>
    )
}



export default Message
