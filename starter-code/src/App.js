import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import SignUp from './components/Signup';
import Message from './components/Message';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>
				<div>
					<Switch>
						<Route path="/signup" component={SignUp} />
						<Route path="/message" component={Message} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
