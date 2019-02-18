import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

import BulmaNavBar from "./BulmaNavBar.js";
import FormField from "./FormField.js";

ReactDOM.render(
	<div id="wrapper">
		<BulmaNavBar />
		<div className="container">
			<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
			<FormField
				label="Email"
				type="email"
				placeholder="e.g. alexsmith@gmail.com"
			/>
		</div>
	</div>,
	document.getElementById("root")
);
