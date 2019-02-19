import React from "react";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import Message from "./Message.js";

class SignUp extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="section">
					<div className="container">
						<Message isInfo title="Hello World">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
							<strong>Pellentesque risus mi</strong>.
						</Message>

						<form id="signUp">
							<FormField
								label="Name"
								type="text"
								placeholder="e.g Alex Smith"
							/>

							<FormField
								label="Email"
								type="email"
								placeholder="e.g. alexsmith@gmail.com"
							/>

							<FormField
								label="Password"
								type="password"
								placeholder="e.g your password"
							/>

							<CoolButton isSuccess className="is-rounded">
								Submit
							</CoolButton>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default SignUp;
