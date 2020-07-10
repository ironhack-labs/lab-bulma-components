import React, {Component} from "react";

class Message extends Component {
	render() {
		return (
			<article className={this.props.class}>
				<div class="message-header">
					<p>{this.props.title}</p>
					<button class="delete" aria-label="delete"></button>
				</div>
				<div class="message-body">{this.props.body}</div>
			</article>
		);
	}
}

export default Message;
