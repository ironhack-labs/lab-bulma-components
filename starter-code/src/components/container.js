import React, { Component } from "react";


function Container(props) {
  return (
    <div className="container">
      {props.content}
    </div>
  )
}

export default Container;