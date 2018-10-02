import React, {Component} from 'react'

import SignUp from './pages/Signup'

export default class Container extends Component{

  render(){
    return(

      <div className='container has-text-centered'>
        <SignUp />
      </div>

    );
  }

}