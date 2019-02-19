import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import SignUp from "./SignUp.js";
import { classRegistration } from "./Helpers.js";

console.log(classRegistration());

ReactDOM.render(
	<div>
		<SignUp />
	</div>,
	document.getElementById("root")
);
