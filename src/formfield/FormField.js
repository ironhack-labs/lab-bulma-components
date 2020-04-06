import 'bulma/css/bulma.css';
import React, { Component } from 'react';


class FormField extends Component {
	render() {
		const { labeName, labelFor, inputType, placeholder} = this.props;
			return (
				<div className="field">
					<label className="label" htmlFor={ labelFor }>{ labeName }</label>
					<input className="input" type={ inputType } placeholder={ placeholder }/>
				</div>
			)
	}
}

export default FormField;