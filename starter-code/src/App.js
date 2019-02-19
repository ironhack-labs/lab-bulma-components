import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>
				<div className="containerForm">
					<form>
						<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
						<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

						<CoolButton isSmall isSuccess>
							Submit
						</CoolButton>
					</form>
				</div>
			</div>
		);
	}
}

export default App;
