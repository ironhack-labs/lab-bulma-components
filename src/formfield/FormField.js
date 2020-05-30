import React from "react";

function FormField(props) {
	return (
		<div className="field">
			<label className="label">{props.label}</label>
			<input class="input" type={props.type} placeholder={props.placeholder} width="20%"/>
		</div>
	);
}

export default FormField;
