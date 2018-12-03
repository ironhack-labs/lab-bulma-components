import React from "react"

export default class CoolButton extends React.Component {
     render() {
        return (
           <div className="coolButtonElement">
                <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button>
            </div>
        )
     }
 }

