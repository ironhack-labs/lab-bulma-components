/** @format */

import React from "react";
import Navbar from "../navbar/Navbar";
import Formfield from "../formfield/Formfield";
import CoolButton from "../coolbutton/CoolButton";

function SignUp() {
	return (
		<div className="SignUp">
			<Navbar />
			<main>
				<Formfield label="Name" type="text" placeholder="John Doe" />
				<Formfield
					label="Email"
					type="email"
					placeholder="johndoe@mail.com"
				/>
				<Formfield label="Password" type="password" placeholder="•••••••" />
				<CoolButton isRounded isPrimary className="button">
					Submit
				</CoolButton>
			</main>
		</div>
	);
}

export default SignUp;
