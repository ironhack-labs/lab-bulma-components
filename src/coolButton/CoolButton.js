import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import CssOptions from '../cssOptions/CssOptions';

class CoolButton extends Component {
	render() {
		let dynClass =
			(this.props.className ? this.props.className + ' ' : '') + 'button ';
		Object.keys(this.props).map((p) => {
			if (CssOptions[p] != undefined) {
				dynClass += CssOptions[p] + ' ';
			}
		});
		return <button className={dynClass}>{this.props.children}</button>;
	}
}

export default CoolButton;
