import React, { Component } from 'react'

const CoolButton = props => {
    return (
      <div>
        <button className={props.className}>{props.children}</button>
      </div>
    );
  };

export default CoolButton;