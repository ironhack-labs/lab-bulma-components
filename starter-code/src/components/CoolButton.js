import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class CoolButton extends Component {
    render() {
        var x= "button "
        var z= this.props.className + " "
        x+=z
        if (this.props.isSmall !== undefined) { x+= " isSmall " }
        if (this.props.isSuccess !== undefined) { x+= " isSuccess " }
        if (this.props.isDanger !== undefined) { x+= " isDanger " }
        
    return (
      <div>
        <button className={x}>{this.props.nombre}</button>
      </div>
    )
  }
}
