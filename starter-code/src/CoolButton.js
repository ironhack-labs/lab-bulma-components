import React from "react";
class CoolButton extends React.Component {
	render() {
		const { children, className } = this.props;

		// empty output for later
		let classes;

		// list of possible Bulma Props
		const bulmaProps = {
			isActive: "is-active",
			isBlack: "is-black",
			isCentered: "is-centered",
			isDanger: "is-danger",
			isDark: "is-dark",
			isFocused: "is-focused",
			isGrouped: "is-grouped",
			isHovered: "is-hovered",
			isInfo: "is-info",
			isInverted: "is-inverted",
			isLarge: "is-large",
			isLight: "is-light",
			isLink: "is-link",
			isLoading: "is-loading",
			isMedium: "is-medium",
			isOutlined: "is-outlined",
			isPrimary: "is-primary",
			isRight: "is-right",
			isRounded: "is-rounded",
			isSelected: "is-selected",
			isSmall: "is-small",
			isStatic: "is-static",
			isSuccess: "is-success",
			isText: "is-text",
			isWarning: "is-warning",
			isWhite: "is-white"
		};

		// get camelCase obj keys into an array
		const keys = Object.keys(bulmaProps);

		// loop into that array of isSomething
		for (const key of keys) {
			let toDashCase = key.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

			// check if any is within component props
			if (key in this.props) {
				// convert to dash-case and send to classesNames to be outputed
				// TO REFACTOR to use bulmaProps obj value instead
				classes += " " + toDashCase + " ";
			}
		}

		// concatenate
		classes = `button ${classes} ${className}`;

		return <button className={classes}> {children}</button>;
	}
}
export default CoolButton;
