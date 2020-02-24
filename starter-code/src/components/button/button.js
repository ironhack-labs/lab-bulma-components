import React from 'react'

const Button = props => <button className={ "button is-small " + props.classes }>{ props.text }</button>

export default Button