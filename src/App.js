import React from "react";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import Coolbutton from "./coolbutton/Coolbutton";

const App = () => {
	return (
		<div>
			<Navbar />
			<Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
			<Formfield
				label="Email"
				type="email"
				placeholder="e.g alexsmith@gmail.com"
			/>
			<Coolbutton
				class="button is-rounded my-class is-danger is-small"
				cta="Button 1"
			/>
			<Coolbutton class="button is-small is-success" cta="Button 2" />
		</div>
	);
};

export default App;
