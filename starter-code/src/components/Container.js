import React, { Fragment } from 'react';
import Signup from './Signup';
import Message from './Message';

const Container = () => {
  return (
    <Fragment>
      <Signup />
      <br/><br/>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </Fragment>
  )
}

export default Container;
