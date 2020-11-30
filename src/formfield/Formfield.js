import React, { Component } from 'react'

class Formfield extends Component {
render(){
    return(

        <div className='field'>
        <label className='label'>{this.props.label}</label>
        <div className='control'></div>
        <input className = 'input' placeholder = {this.props.placeholder}>{this.props.input}</input>
      </div>
    )
}

}


export default Formfield;