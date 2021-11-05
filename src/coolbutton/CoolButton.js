/** @format */

import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
	let btnText = {
		isSmall: "is-small",
		isDanger: "is-danger",
		isSuccess: "is-success",
		isRounded: "is-rounded",
		isPrimary: "is-primary",
	};

	let btn = "button";

	Object.keys(btnText).forEach((eachKey) => {
		if (props[eachKey]) {
			btn += " " + btnText[eachKey];
		}
	});

	return <button className={btn}>{props.children}</button>;
}

export default CoolButton;
