import React from 'react';

import Message from './Message.js';

function Container(props) {
  return (
    <div className="container">
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
} 

export default Container;