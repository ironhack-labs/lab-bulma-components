import React from "react";

class Message extends React.Component {
	render() {
		let { title, children, isInfo, isDanger, isSuccess } = this.props;
		let messageClass = "";
		// to refactor
		if (isInfo) {
			messageClass = "message is-info";
		} else if (isSuccess) {
			messageClass = "message is-success";
		} else if (isDanger) {
			messageClass = "message is-danger";
		} else {
			messageClass = "message";
		}

		return (
			<div className="container">
				<article className={messageClass}>
					<div className="message-header">
						<p>{title}</p>
						<button className="delete" aria-label="delete" />
					</div>
					<div className="message-body">{children}</div>
				</article>
			</div>
		);
	}
}

export default Message;
