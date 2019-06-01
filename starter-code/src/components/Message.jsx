import React, {Component} from "react";
import Containeer from "./Containeer";

class Message extends Component{
    render() {
        return (
           <Containeer>
                <article className="message is-info">
                    <div className="message-header">
                        <p>{this.props.title}</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                    {this.props.children}
                    </div>
                </article>
                </Containeer>
        )
    }
}

export default Message;