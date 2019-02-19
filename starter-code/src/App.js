import React, { Component } from 'react';
import './App.css';
import CoolButton from './CoolButton.js';
import FormField from './FormField.js';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			// eslint-disable-next-line react/jsx-filename-extension
			<div className="App">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
						</a>

						<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item">
								Home
      </a>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<CoolButton />
								</div>
							</div>
						</div>
					</div>
				</nav>

				<FormField />
				<h1> Hello Ironhackers! </h1>
			</div>
		);
	}
}

export default App;
