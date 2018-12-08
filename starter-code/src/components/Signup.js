import React, { Component } from 'react';
import FormField from './FormField';
import CoolButton from './Button.js';

class SignUp extends Component {
	handleSave = () => {
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<FormField />
				<CoolButton clickFunction={this.handleSave} isDanger isRounded buttonName="Save" />
			</div>
		);
	}
}

export default SignUp;
