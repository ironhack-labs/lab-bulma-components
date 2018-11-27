import React from "react";

const signup = (props) => {

  let messageProperty = 'message ';

  const messageProperties = {
    isInfo: 'is-info'
  }


  Object.keys(messageProperties).forEach(function(key) {
    if(props.hasOwnProperty(key)) {
      messageProperty += messageProperties[key] + ' ';
    }
  });

  messageProperty = messageProperty.slice(0,-1);

  return (
<article class={messageProperty}>
  <div class="message-header">
    <p>{props.title}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {props.children}
  </div>
</article>
  )
}

export default signup;
