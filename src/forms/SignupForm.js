import React from 'react';
import 'bulma/css/bulma.css';
import './SignupForm.css';
import {Navbar} from '../navbar/Navbar';
import {FormField} from '../formfield/FormField';
import {CoolButton} from '../button/CoolButton';


function SignupForm() {
	return (
		<React.Fragment>
			<div>
				<Navbar>
					<CoolButton isPrimary isSuccess button="Login"/>
					<CoolButton isPrimary isDanger button="Signup"/>
				</Navbar>
			</div>
			<div>
				<fieldset>
					<form action="/" method="POST">
						<FormField label="Name" type="text" placeholder="Please, put in your name"/>
						<FormField label="Email" type="email"
								   placeholder="Please, put in your email"/>
						<FormField label="Password" type="password"
								   placeholder="Please, put in your password and sign in"/>
						<CoolButton isDanger button="Please submit"/>
					</form>
				</fieldset>
			</div>
		</React.Fragment>
	);
}

export {SignupForm};