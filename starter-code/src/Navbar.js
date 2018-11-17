import React, { Component } from 'react';
import CoolButton from './CoolButton';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav
					className="navbar"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img
								src="https://bulma.io/images/bulma-logo.png"
								width="112"
								height="28"
							/>
						</a>

						<a
							role="button"
							className="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item"> Home </a>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="field is-grouped">
									<p className="control">
										<CoolButton
											buttonName="Login"
											buttonType="button is-link"
										/>
									</p>
									<p className="control">
										<CoolButton
											buttonName="Sign Up"
											buttonType="button is-primary"
										/>
									</p>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;