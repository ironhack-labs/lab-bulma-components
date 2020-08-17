import React from 'react'
import Message from './Message'

class Container extends React.Component{
  render(){
    return(
    <div className="container">
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
    )
  }
}

export default Container