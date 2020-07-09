import React, { Component } from 'react';
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';

class Signup extends Component {
	render() {
		return (
			<form action={this.props.action} method="POST">
				<FormField label="Name" type="text" placeholder="Put your name" />
				<FormField label="Email" type="email" placeholder="Put your email" />
				<FormField
					label="Password"
					type="password"
					placeholder="Put your password"
				/>
				<CoolButton isPrimary>Signup</CoolButton>
			</form>
		);
	}
}
export default Signup;
