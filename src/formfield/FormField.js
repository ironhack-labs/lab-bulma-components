/** @format */

import React from "react";
import "bulma/css/bulma.css";
import "./FormField.css";
function Formfield(props) {
	const { label, type, placeholder } = props;
	return (
		<div className="field">
			<label className="label">{label}</label>
			<div className="control">
				<input type={type} className="input" placeholder={placeholder} />
			</div>
		</div>
	);
}

export default Formfield;
