import React from "react";
import './Message.css';

class Message extends React.Component {
    classes = {
        isBlack: 'is-black',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isInfo: 'is-info',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isMedium: 'is-medium',
        isPrimary: 'is-primary',
        isSmall: 'is-small',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
    }

    render() {
        let classesResult = "message " + this.props.className;
        Object.keys(this.props).forEach(clas => {
            let index = Object.keys(this.classes).indexOf(clas);
            if (index >= 0) {
                let value = Object.values(this.classes)[index];
                classesResult += ` ${value}`;
            }
        });
        return (
            <article className={classesResult}>
                <div class="message-header">
                    <p>{this.props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    {this.props.children}
                </div>
            </article>
        );
    }
}

export default Message;