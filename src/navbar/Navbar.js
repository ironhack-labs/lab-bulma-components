import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import 'bulma/css/bulma.css'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='navbar is-transparent'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='https://bulma.io'>
					<img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
				</a>
			</div>

			<div id='navbarExampleTransparentExample' className='navbar-menu'>
				<div className='navbar-start'>
					<a className='navbar-item' href='https://bulma.io/'>
						Home
					</a>
				</div>

				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='field is-grouped'>
							<CoolButton whereTo='/login' styleBulma='button is-rounded my-class is-danger is-small' myButtonName='Login' />
							<CoolButton whereTo='/signup' styleBulma='button is-small is-success' myButtonName='Signup' />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
