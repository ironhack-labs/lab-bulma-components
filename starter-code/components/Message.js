import React, {Component} from "react";

class message extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    
    render(){
        console.log(this.props)
    return (    
        <article className="message">
            <div className="message-header">
                <p>{this.props.pack.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
              <p>{this.props.pack.msg}<strong>{this.props.pack.importantMsg}</strong></p>
            </div>
        </article>
        )
    }
}

export default message;