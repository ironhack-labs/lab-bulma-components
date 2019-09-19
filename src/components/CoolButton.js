import React, { Component } from 'react'

export default class CoolButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (

      <div className='field is-grouped is-grouped-right'>
        <p className='control'>
          <a className='button is-rounded my-class is-danger is-small'>
            Button 1
          </a>
        </p>
        <p className='control'>
          <a className='button is-small is-success'>
            Button 2
          </a>
        </p>
      </div>

    )
  }
}
