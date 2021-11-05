/** @format */
import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
					<a className="navbar-item" href="https://bulma.io">
						<img
							src="https://bulma.io/images/bulma-logo.png"
							alt="Bulma: a modern CSS framework based on Flexbox"
							width="112"
							height="28"
						/>
					</a>
				</div>

				<div id="navbarExampleTransparentExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="btnNavBar">
								<CoolButton isRounded isDanger isSmall>
									Login
								</CoolButton>

								<CoolButton isSmall isSuccess>
									Signup
								</CoolButton>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
