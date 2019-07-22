import React from 'react';
import Signup from './Signup';
import Message from './Message';

const Container = () => {
  return (
    <div className="container">
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default Container;