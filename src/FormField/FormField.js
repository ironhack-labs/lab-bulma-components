import 'bulma/css/bulma.css';
import React from 'react';

const FormField = (props) => {
	return (
		<div className="FormField">
			<label className="label">{props.label}</label>
			<div>
				<input type="text" className={props.input} placeholder={props.placeholder} />
			</div>
		</div>
	)
};

export default FormField;