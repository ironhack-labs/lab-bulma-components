import React, { Component } from 'react';

class FormField extends Component {
	render() {
		return (
			<div className="field">
				<label className={this.props.label}>Name</label>
				<div className="control">
					<input className="input" type={this.props.type} placeholder={this.props.placeholder} />
				</div>
			</div>
		);
	}
}

export default FormField;
