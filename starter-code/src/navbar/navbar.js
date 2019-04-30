import React from 'react'
import './navbar.css'

export default function navbar (props) {
  return (
    <div className='navbar has-navbar-fixed-top is-light'>
      <div className='container1'>
        <img
          alt='bulma logo'
          className='logo'
          src='../images/bulma-banner.png'
        />
        <a class='link' href='/home'>
          Home
        </a>
      </div>
      <div className='container2'>
        <a class='button is-info' href='/login'>
          Login
        </a>
        <a class='button is-primary' href='/singup'>
          Singup
        </a>
      </div>
    </div>
  )
}
