import React, { Component } from 'react';
// import 'bulma/css/bulma.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: this.props.label,
			type: this.props.type,
			placeholder: this.props.placeholder,
		};
	}
	render() {
		return (
			<div className="field">
				<label className="label">{this.state.label}</label>
				<div className="control">
					<input
						className="input"
						type={this.state.type}
						placeholder={this.state.placeholder}
					/>
				</div>
			</div>
		);
	}
}
