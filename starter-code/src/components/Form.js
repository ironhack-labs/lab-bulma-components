import React, { Component } from 'react'


class Form extends Component {

  render(){
    return(
      <form>

        <div>
          <label form="name" className='label'>Name</label>
          <div className='control'>
            <input type="text" id="name" placeholder="e.g Alex Smith"></input>
          </div>
        </div>
        <div className='field'>
          <label form="email" className='label'>Email</label>
          <div className='control'>
            <input type="email" id="email" placeholder="e.g. alexsmith@gmail.com"></input>
          </div>
        </div>
      </form>
    );
  }

}

export default Form