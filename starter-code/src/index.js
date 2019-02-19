import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import SignUp from "./SignUp.js";
// personnal reminder, not lab related #COURSELINK import a function
// https://stackoverflow.com/a/46839116/3468846
//import { classRegistration } from "./Helpers.js";
//console.log(classRegistration());

ReactDOM.render(
	<div>
		<SignUp />
	</div>,
	document.getElementById("root")
);
