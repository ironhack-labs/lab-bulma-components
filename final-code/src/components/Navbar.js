import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';

function navbar() {
	return (
		<nav class="navbar is-fixed-top">
			<div class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item">
						<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
					</a>
					<a href="/" class="navbar-item">Home</a>
				</div>
				<div class="navbar-end buttons">
					<a href="/" class="navbar-item button is-info">Login</a>
					<a href="/" class="navbar-item button is-primary">Signup</a>
				</div>
			</div>
		</nav>
	)
}

export default navbar;