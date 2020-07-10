import React, {Component} from "react";
import Formfield from "../formfield/Formfield";
import Coolbutton from "../coolbutton/Coolbutton";
import Navbar from "../navbar/Navbar";
import Message from "../message/Message";

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
					<Coolbutton
						class="button is-Medium is-success mt-2"
						cta="Create account"
					/>
					<Message
						class="message mt-5"
						title="Hello World"
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pallentesque risus mi."
					/>
				</form>
			</div>
		);
	}
}

export default Signup;
