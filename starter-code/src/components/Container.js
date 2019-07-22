import React, { Fragment } from 'react';
import Signup from './Signup';
import Navbar from './Navbar';
import Message from './Message'

const Container = ({ className }) => {
  return (
    <Fragment>
      <Navbar />
      <div className={className}>
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      </div>
    </Fragment>
  );
}


export default Container;