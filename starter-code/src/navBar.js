import React from "react";
import {NavLink} from "./navLink";
import {NavButton} from "./navButton";

export const NavBar = () => {
	return (
		<nav className="navbar is-light">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
				</a>
				<div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			
			<div id="navbarExampleTransparentExample" className="navbar-menu">
				<NavLink classNavStart="navbar-start" classNavItem="navbar-item" url="/" textLink="Home" />

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="field is-grouped">
							<NavButton classNavEnd="navbar-end" btnStyle="is-info" navBtnText="Login" />
							<NavButton classNavEnd="navbar-end" btnStyle="is-primary" navBtnText="Download" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}