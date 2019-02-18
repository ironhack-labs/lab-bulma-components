import React from "react";
class FormField extends React.Component {
	render() {
		const { label, type, placeholder } = this.props;

		return (
			<div>
				<div class="field">
					<label class="label">{label}</label>
					<div class="control">
						<input class="input" type={type} placeholder={placeholder} />
					</div>
				</div>
			</div>
		);
	}
}
export default FormField;
