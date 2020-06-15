import React from 'react'
import classes from '../bulmaClasses'
import './Message.css'
class Message extends React.Component{
    render(){
        let cssClass = "message "
        Object.keys(this.props).forEach( el => {
            if(classes[el]) cssClass += classes[el] + " "
        })
        return <article className={cssClass}>
        <div className="message-header">
        <p>{this.props.title}</p>
        <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
        {this.props.children}
        </div>
    </article>
    }
}
export default Message;