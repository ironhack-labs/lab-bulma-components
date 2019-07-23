import React, { Component } from 'react';

export default class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			isInfo: this.props.isInfo,
		};
	}
	render() {
		return (
			<article className={`message ${this.state.isInfo && 'is-info'}`}>
				<div className="message-header">
					<p>{this.state.title}</p>
					<button className="delete" aria-label="delete" />
				</div>
				<div className="message-body">{this.props.children}</div>
			</article>
		);
	}
}
