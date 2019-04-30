import React from 'react'
import './navbar.css'
import CoolButton from '../Coolbutton/CoolButton'

export default function navbar (props) {
  return (
    <div className='navbar has-navbar-fixed-top is-light'>
      <div className='container1'>
        <img
          alt='bulma logo'
          className='logo'
          src='../images/bulma-banner.png'
        />
        <a className='link' href='/home'>
          Home
        </a>
      </div>
      <div className='container2'>
        <CoolButton className='button is-info' button='login' />
        <CoolButton className='button is-primary' button='singup' />
      </div>
    </div>
  )
}
