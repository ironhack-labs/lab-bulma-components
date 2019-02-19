import React from "react";
class FormField extends React.Component {
	render() {
		const { label, type, placeholder } = this.props;

		return (
			<div>
				<div className="field">
					<label className="label">{label}</label>
					<div className="control">
						<input
							className="input"
							type={type}
							placeholder={placeholder}
							autoComplete={label}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default FormField;
