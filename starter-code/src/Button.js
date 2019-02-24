import React from 'react';

export default function Button (props) {

  return (
    <p className="control">
      <a className={`button ${props.className}`} href="">
        <span>{props.name}</span>
      </a>
    </p>

  )

}