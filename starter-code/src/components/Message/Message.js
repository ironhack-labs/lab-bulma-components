import React from "react";
import getClass from "../../getClass.util";


export default function Message(props) {

  return <article className={'message ' + getClass(props)}>
            <div className="message-header">
              <p>{props.title}</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
            {props.children}
            </div>
          </article>
  

}
