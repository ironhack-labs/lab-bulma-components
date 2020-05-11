import React, { Component } from 'react'

class Button extends Component {
    render() {
        console.log("this.props, ", this.props)
        return (
            <div>
                <button className={`button ${this.props.prop1} ${this.props.prop2}`}> {this.props.children} </button>
                {/*like this: <img src={`/images/${this.props.imag}`} alt=""/> */}
            </div>
        )
    }
}

export default Button
