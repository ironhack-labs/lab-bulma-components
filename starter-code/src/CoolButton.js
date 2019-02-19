import React, { Component } from 'react';

class CoolButton extends Component {
	render() {
		return <button className={checkClass(this.props)}>{this.props.children}</button>;

		function checkClass(props) {
			let className = 'button ';
			if (props.isSmall) className += 'is-small ';
			if (props.isDanger) className += 'is-danger ';
			if (props.isSuccess) className += 'is-success ';
			if (props.className) className += props.className;
			return className;
		}
	}
}
export default CoolButton;
