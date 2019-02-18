import React from "react";
class BulmaNavBar extends React.Component {
	render() {
		return (
			<div>
				<nav class="navbar has-background-light">
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
							<span />
							<span />
							<span />
						</div>
					</div>

					<div id="navbarExampleTransparentExample" class="navbar-menu">
						<div class="navbar-start">
							<a class="navbar-item" href="https://bulma.io/">
								Home
							</a>
						</div>

						<div class="navbar-end">
							<div class="navbar-item">
								<div class="field is-grouped">
									<p class="control">
										<a
											class="bd-tw-button button is-info"
											target="_blank"
											href="#0"
										>
											<span>Login</span>
										</a>
									</p>
									<p class="control">
										<a class="button is-primary" href="#0">
											<span>Sign-Up</span>
										</a>
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
export default BulmaNavBar;
