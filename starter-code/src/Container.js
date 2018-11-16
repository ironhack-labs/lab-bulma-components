import React, {Component} from 'react';
import Message from './Message';

class Container extends Component {
  render() {

    return (
      <form>
        <Message title='Hi dude' />
      </form>
    )
  }
}

export default Container;