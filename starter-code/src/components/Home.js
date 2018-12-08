import React, { Component } from 'react';
import CoolButton from './Button.js';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}
	handleIncrement = () => {
		this.setState({ counter: this.state.counter + 1 });
	};
	render() {
		return (
			<div>
				<div>
					<h1 className="title is-2 has-text-primary has-text-centered">Welcome to React with Bulma!</h1>
				</div>
				<h1 className="has-text-centered">Counter = {this.state.counter}</h1>
				<div className="box has-text-centered">
					<CoolButton clickFunction={this.handleIncrement} isWarning isRounded buttonName="Add count" />
				</div>
			</div>
		);
	}
}

export default Home;
