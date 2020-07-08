import React, { Component } from 'react';
import 'bulma/css/bulma.css';

const buttonOptions = {
	isActive: 'is-active',
	isBlack: 'is-black',
	isCentered: 'is-centered',
	isDanger: 'is-danger',
	isDark: 'is-dark',
	isFocused: 'is-focused',
	isGrouped: 'is-grouped',
	isHovered: 'is-hovered',
	isInfo: 'is-info',
	isInverted: 'is-inverted',
	isLarge: 'is-large',
	isLight: 'is-light',
	isLink: 'is-link',
	isLoading: 'is-loading',
	isMedium: 'is-medium',
	isOutlined: 'is-outlined',
	isPrimary: 'is-primary',
	isRight: 'is-right',
	isRounded: 'is-rounded',
	isSelected: 'is-selected',
	isSmall: 'is-small',
	isStatic: 'is-static',
	isSuccess: 'is-success',
	isText: 'is-text',
	isWarning: 'is-warning',
	isWhite: 'is-white',
};
class CoolButton extends Component {
	render() {
		let dynClass = 'button ';
		Object.keys(this.props).map((p) => {
			console.log(p);
			if (p != 'children') {
				dynClass += buttonOptions[p];
			}
		});
		return <button className={dynClass}>{this.props.children}</button>;
	}
}

export default CoolButton;
