import React, {Component} from "react";
import Formfield from "../formfield/Formfield";
import Coolbutton from "../coolbutton/Coolbutton";
import Navbar from "../navbar/Navbar";

class Signup extends Component {
	render() {
		const fields = [
			{
				label: "Name",
				type: "text",
				placeholder: "Type your name here",
			},
			{
				label: "Email",
				type: "email",
				placeholder: "Type your email here",
			},
			{
				label: "Password",
				type: "password",
				placeholder: "******",
			},
		];
		const fieldsList = fields.map((field, index) => (
			<Formfield
				key={index}
				label={field.label}
				type={field.type}
				placeholder={field.placeholder}
			/>
		));
		return (
			<div className="wrapper">
				<Navbar />
				<form action="" method="">
					{fieldsList}
					<p>{fieldsList}</p>
					<Coolbutton
						class="button is-Medium is-success"
						cta="Create account"
					/>
				</form>
			</div>
		);
	}
}

export default Signup;
