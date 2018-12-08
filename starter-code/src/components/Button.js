import React, { Component } from 'react';

class CoolButton extends Component {
	render() {
		let classString = 'button ';
		classString += this.props.isWarning ? 'is-warning ' : '';
		classString += this.props.isActive ? 'is-active ' : '';
		classString += this.props.isBlack ? 'is-black ' : '';
		classString += this.props.isCentered ? 'is-centered ' : '';
		classString += this.props.isDanger ? 'is-danger ' : '';
		classString += this.props.isDark ? 'is-dark ' : '';
		classString += this.props.isFocused ? 'is-focused ' : '';
		classString += this.props.isGrouped ? 'is-grouped ' : '';
		classString += this.props.isHovered ? 'is-hovered ' : '';
		classString += this.props.isInfo ? 'is-info ' : '';
		classString += this.props.isInverted ? 'is-inverted ' : '';
		classString += this.props.isLarge ? 'is-large ' : '';
		classString += this.props.isLight ? 'is-light ' : '';
		classString += this.props.isLink ? 'is-link ' : '';
		classString += this.props.isLoading ? 'is-loading ' : '';
		classString += this.props.isMedium ? 'is-medium ' : '';
		classString += this.props.isOutlined ? 'is-outlined ' : '';
		classString += this.props.isPrimary ? 'is-primary ' : '';
		classString += this.props.isRight ? 'is-right ' : '';
		classString += this.props.isRounded ? 'is-rounded ' : '';
		classString += this.props.isSelected ? 'is-selected ' : '';
		classString += this.props.isSmall ? 'is-small ' : '';
		classString += this.props.isStatic ? 'is-static ' : '';
		classString += this.props.isSuccess ? 'is-success ' : '';
		classString += this.props.isText ? 'is-text ' : '';
		classString += this.props.isWhite ? 'is-white ' : '';
		return (
			<div>
				<button onClick={this.props.clickFunction} className={classString}>
					{this.props.buttonName}
				</button>
			</div>
		);
	}
}

export default CoolButton;

// var classNames = Object.keys(props).filter((theProp)=> typeof props[theProp] === "boolean")
//     var classNamesKebab = classNames.map((camel)=> camel.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() }))
//     var allClassNames = `button ${classNamesKebab.join(" ")} ${props.className}
//
