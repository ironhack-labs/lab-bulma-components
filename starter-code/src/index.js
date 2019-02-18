import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

import BulmaNavBar from "./BulmaNavBar.js";

ReactDOM.render(
	<div id="wrapper">
		<BulmaNavBar />
		<div> smtg else</div>
	</div>,
	document.getElementById("root")
);
