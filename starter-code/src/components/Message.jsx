import React, { Component } from "react"

class Message extends Component {

    state={
        active:true
    }

    closeModal=()=>{
        this.setState({active:false})
    }

    render() {
        let {active} = this.state
        return (
            <div className={active ? "modal is-active" : "modal"} >
                <div className="modal-background" onClick={this.closeModal}></div>
                <div className="modal-content">

                    <article className="message">
                        <div className="message-header">
                            <p>Hello World</p>
                            <button className="delete" aria-label="delete" onClick={this.closeModal}></button>
                        </div>
                        <div className="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>

                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
            </div>
        )
    }
}

export default Message