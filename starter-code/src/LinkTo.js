import React from 'react';

export default function LinkTo (props) {
  return (
    <div className="navbar-start">
      <a className="navbar-item" href={props.link}>
        {props.name}
      </a>
    </div>
  )

}