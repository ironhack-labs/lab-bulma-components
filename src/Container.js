import React from 'react'
import Message from './Message'

import 'bulma/css/bulma.css';


const Container = (props) => {
    return (
      <div className='Container'>
        <article class={props.class}>
            <div class="message-header">
                <p>Info</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <Message />
        </article>
      </div>
    );
};

export default Container;