import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.className,
		};
	}
	render() {
		return (
			<button
				className={`button ${this.props.className &&
					this.props.className} ${this.props.isSmall && 'is-small'} ${this.props
					.isDanger && 'is-danger'} ${this.props.isSuccess &&
					'is-success'}  ${this.props.isInfo && 'is-info'}`}>
				{this.props.children}
			</button>
		);
	}
}
