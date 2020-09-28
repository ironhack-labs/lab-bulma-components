import React from 'react'


const Message = props => {

    (

        <>

            <article className="message" className={props.className}>
  
                <div class="message-header">
    
                    <p>{props.title}</p>
    
                    <button class="delete" aria-label="delete"></button>
  
                </div>
  
                <div class="message-body">
        
                    <p>{props.body}</p>
  
                </div>

            </article>

        </>

    )

}



export default Message