import React from "react";

function Navbar() {
	return (
		<nav class="navbar is-light">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://bulma.io">
					<img
						src="https://bulma.io/images/bulma-logo.png"
						alt="Bulma: a modern CSS framework based on Flexbox"
						width="112"
						height="28"
					/>
				</a>
				<div
					class="navbar-burger burger"
					data-target="navbarExampleTransparentExample"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navbarExampleTransparentExample" class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item" href="https://bulma.io/">
						Home
					</a>
					<div class="navbar-item has-dropdown is-hoverable"></div>
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-link">
								<strong>Log in</strong>
							</a>
							<a class="button is-primary">Sign up</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
