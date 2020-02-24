import React, { Component } from 'react'
import CoolButton from './CoolButton'
import Signup from './Signup'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar is-transparent'>
          <img src="https://bulma.io/images/bulma-logo.png" height="10" width='60' />
          <a href='#'>Home</a>
          <CoolButton className='button is-small is-info'>Login</CoolButton>
          <CoolButton className='button is-small is-primary'>Signup</CoolButton>
        </nav>
      </div>
    )
  }
}
