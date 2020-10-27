import React from 'react';
import returnClassNames from '../../utils/classManager';
import './Message.css';


class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMessage: true }
    }

    handleCloseclick = () => this.setState({ showMessage: this.state.showMessage = false });

    render() {
        if (this.state.showMessage) {
            return (
                <article className={`message ${returnClassNames(this.props)} custom-message`}>
                <div className="message-header">
                    <p>{this.props.title}</p>
                    <button className="delete" aria-label="delete" onClick={this.handleCloseclick}></button>
                </div>
                <div className="message-body">{this.props.children}</div>
                </article>
            )
        } else return <article className={`message ${returnClassNames(this.props)} closeMessage`}></article>;
    }
}

export default Message;