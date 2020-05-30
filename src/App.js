import React, { Component } from "react";
import "./navbar/Navbar.css";
import Navbar from "./navbar/Navbar";
import "bulma/css/bulma.css";
import FormField from "./formfield/FormField";
import "./formfield/FormField.css"

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
				<FormField
					label="Email"
					type="email"
					placeholder="e.g. alexsmith@gmail.com"
				/>
			</div>
		);
	}
}

export default App;
