import React, {Component} from "react"

class CoolButton extends Component {
 constructor(props) {
     super(props)
 }
 
 render () {
    return (this.props.isDanger) ? <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button> : <button className="button is-small is-success">{this.props.children}</button>
 }

}
export default CoolButton
