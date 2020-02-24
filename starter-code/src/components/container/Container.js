import React from 'react'
import Message from "../message/Message";


const Container = props => {

        return (
            <article className="message is-info">
  <div className="message-header">
    <p>{props.title}</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
         <Message isInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit." strong="Pellentesque risus mi"></Message>
         </div>
</article>
    )}

export default Container