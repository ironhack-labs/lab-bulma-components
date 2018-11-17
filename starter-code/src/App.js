import React, { Component } from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Container from './Container';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<SignUp />
				<Container />
			</div>
		);
	}
}

export default App;
