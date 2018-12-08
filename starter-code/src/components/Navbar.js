import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.js';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			className: 'navbar-menu'
		};
	}
	handleClick(e) {
		if (this.state.className === 'navbar-menu') {
			this.setState({ className: 'navbar-menu is-active' });
		} else {
			this.setState({ className: 'navbar-menu' });
		}
	}

	render() {
		return (
			<div>
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
						</a>
						<a
							onClick={(e) => this.handleClick(e)}
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
					<div id="navbarBasicExample" className={this.state.className}>
						<div className="navbar-start">
							<Link to="/" className="navbar-item">
								Home
							</Link>
							<Link to="/message" className="navbar-item">
								Message
							</Link>
							<div className="navbar-item has-dropdown is-hoverable">
								<Link to="#" className="navbar-link">
									More
								</Link>
								<div className="navbar-dropdown">
									<Link to="#" className="navbar-item">
										About
									</Link>
									<Link to="#" className="navbar-item">
										Jobs
									</Link>
									<Link to="#" className="navbar-item">
										Contact
									</Link>
									<hr className="navbar-divider" />
									<Link to="#" className="navbar-item">
										Report an issue
									</Link>
								</div>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<Link to="/signup">
										<Button
											onClick={this.clickHandler}
											isRounded
											isDanger
											isSmall
											buttonName="Sign Up"
										/>
									</Link>
									<Button isSmall isSuccess isRounded buttonName="Log In" />
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
