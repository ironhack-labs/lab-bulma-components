import React, { Component } from 'react';

import FormField from './FormField';
import CoolButton from './CoolButton';

class SignUp extends Component {
	render() {
		return (
			<form  className="container">
				<FormField
					labelName="Name"
					inputName="name"
					inputType="text"
					placeholder="Ricardo Mayo"
				/>
				<FormField
					labelName="Email"
					inputName="email"
					inputType="text"
					placeholder="mail@here.com"
				/>
				<FormField
					labelName="Password"
					inputName="password"
					inputType="password"
					placeholder="Password"
				/>
				<CoolButton
					buttonName="Sign Up"
					buttonType="button is-small is-success"
				/>
                <br/><br/>
			</form>
		);
	}
}

export default SignUp;
