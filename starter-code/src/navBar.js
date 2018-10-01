import React from "react";
import {NavItem} from "./navItem";

export const NavBar = () => {
	return (
		<nav className="navbar is-transparent">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
				</a>
			</div>
			<div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div id="navbarExampleTransparentExample" className="navbar-menu">
				<NavItem classNavStart="navbar-start" classNavItem="navbar-item" url="/" textLink="Home" />
			</div>
		</nav>
	)
}