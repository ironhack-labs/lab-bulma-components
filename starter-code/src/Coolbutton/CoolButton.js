import React from 'react'
import './CoolButton.css'

export default function CoolButton (props) {
  return (
    <div className='cool-buttons'>
      <button class='button is-rounded my-class is-danger is-small'>
        Button 1
      </button>
      <button class='button is-small is-success'>Button 2</button>
    </div>
  )
}
