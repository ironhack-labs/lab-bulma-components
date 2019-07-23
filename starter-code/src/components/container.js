import React, {Fragment} from 'react';
import Message from './message';
import SignUp from './/signUp'

const Container = () => {
  return ( 
    <Fragment >
      <SignUp />
      <div className="message">
        <Message />
      </div>
    </Fragment>
    )
};

export default Container;