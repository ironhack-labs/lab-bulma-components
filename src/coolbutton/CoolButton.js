import React from 'react'
import ReactDOM from 'react-dom'

const CoolButton = (props) => {
  return (
      <button className={`button ${props.className}`}>{props.children}</button>
  )  
}

export default CoolButton