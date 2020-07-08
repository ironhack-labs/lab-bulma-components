import React, { Component } from 'react';
import './FormField.css';

class FormField extends Component {
	render() {
		return (
			<div class="field">
				<label class="label">{this.props.label}</label>
				<div class="control">
					<input
						class="input"
						type={this.props.type}
						placeholder={this.props.placeholder}
					/>
				</div>
			</div>
		);
	}
}

export default FormField;
