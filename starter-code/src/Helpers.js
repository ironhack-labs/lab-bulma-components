// personnal reminder, not directly related to the lab

export function classRegistration(string, destination) {
	var props = {
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

	const keys = Object.keys(props);

	for (const key of keys) {
		// camelCase to dashCase
		// https://gist.github.com/youssman/745578062609e8acac9f#gistcomment-2304728
		let toDashCase = key.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

		// if input equals one of the listed props
		if (string === key) {
			// convert to dash-case and send to classesNames to be outputed
			destination += toDashCase + " ";
		}

		console.log(key, toDashCase, destination);
	}
}
