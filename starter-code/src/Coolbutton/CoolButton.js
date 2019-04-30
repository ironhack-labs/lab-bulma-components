import React from 'react'
import './CoolButton.css'

export default function CoolButton (props) {
  return (
    <div className='cool-buttons'>
      <button className={props.className}>{props.button}</button>
    </div>
  )
}
