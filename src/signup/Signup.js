import React, { Component } from 'react';
import FormField from '../formfield/FormField';
import CoolButton from '../coolButton/CoolButton';
import Navbar from '../navbar/Navbar';

class Signup extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar />
				</header>
				<main>
					<form action={this.props.action} method="POST">
						<FormField label="Name" type="text" placeholder="Put your name" />
						<FormField
							label="Email"
							type="email"
							placeholder="Put your email"
						/>
						<FormField
							label="Password"
							type="password"
							placeholder="Put your password"
						/>
						<CoolButton isPrimary>Signup</CoolButton>
					</form>
				</main>
			</div>
		);
	}
}

export default Signup;
