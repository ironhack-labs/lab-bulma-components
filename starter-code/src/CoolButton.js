import React from "react";
class CoolButton extends React.Component {
	render() {
		const { isSmall, isDanger, isSuccess, children, className } = this.props;
		let classes;

		if (isSmall) {
			classes += " is-small";
		}

		if (isDanger) {
			classes += " is-danger";
		} else if (isSuccess) {
			classes += " is-success";
		} else if (isInfo) {
			classes += " is-info";
		}

		classes = `button ${classes}`;

		return <button className={classes}> {children}</button>;
	}
}
export default CoolButton;
