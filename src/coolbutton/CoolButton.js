import React from 'react'
import 'bulma/css/bulma.css';
import './CoolButton.css'

const CoolButton = (props)=>{
  const classNameString = `
    button ${props.isSmall ? 'is-small' : ''} ${props.isSuccess ? 'is-success' : ''} ${props.isDanger ? 'is-danger' : ''} ${props.isPrimary ? 'is-primary' : ''}
  `
  return(
    <button className={classNameString}>{props.text}</button>
  )
}

export default CoolButton