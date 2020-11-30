import React from 'react'
import CoolButton from '../coolButton/CoolButton.js'
import 'bulma/css/bulma.css'

const navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className='navbar-item' href='https://bulma.io'>
                    <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
                </a>
                <div className='navbar-burger burger' data-target='navbarExampleTransparentExample'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id='navbarExampleTransparentExample' className='navbar-menu'>
                <div className='navbar-start'>
                    <a className='navbar-item' href='#'>HOME</a>
                </div>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <div class='field is-grouped'>
                        <p className='control'>
                        <CoolButton className='is-info' title='Login'></CoolButton>
                        </p>
                        <p className='control'>
                            <CoolButton className='is-primary' title='Signup'></CoolButton>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar