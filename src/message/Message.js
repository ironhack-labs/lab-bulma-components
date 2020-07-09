import React, { Component } from 'react';
import CssOptions from '../cssOptions/CssOptions';

class Message extends Component {
	render() {
		let dynClass =
			(this.props.className ? this.props.className + ' ' : '') + 'message ';
		Object.keys(this.props).map((p) => {
			if (CssOptions[p] != undefined) {
				dynClass += CssOptions[p] + ' ';
			}
		});
		return (
			<article class={dynClass}>
				<div class="message-header">
					<p>{this.props.title}</p>
					<button class="delete" aria-label="delete"></button>
				</div>
				<div class="message-body">{this.props.children}</div>
			</article>
		);
	}
}
export default Message;
