import React from 'react';

const Message = () =>{

    return(

        
        <div className= "columns is-mobile is-centered">
            <div className="column is-one-third">
                <article className="message is-primary">
                    <div className="message-header">
                        <p>Hola Mundo</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>

                    <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <strong>Pellentesque risus mi</strong>.
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Message