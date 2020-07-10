import React, {Component} from "react";
import Coolbutton from "../coolbutton/Coolbutton";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar is-transparent">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img
							src="https://bulma.io/images/bulma-logo.png"
							alt="Bulma: a modern CSS framework based on Flexbox"
							width="112"
							height="28"
						/>
					</a>
				</div>
				<div id="navbarExampleTransparentExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="/">
							Home
						</a>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								<p className="control">
									<a target="_blank" href="/login">
										<Coolbutton class="bd-tw-button button" cta="Login" />
									</a>
								</p>
								<p className="control">
									<a target="_blank" href="/signup">
										<Coolbutton class="button is-primary" cta="Signup" />
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
