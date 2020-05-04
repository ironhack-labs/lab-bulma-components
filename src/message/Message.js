import React from 'react'
import 'bulma/css/bulma.css';
import './Message.css'


const Message = props => {
    return (

        <article className={props.classArticleBulma}>
            <div className="message-header">
                <h3> {props.title} </h3>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.text}
            </div>
        </article>


    );
  };


export default Message