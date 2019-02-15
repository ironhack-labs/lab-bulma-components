import React from "react"
import "./CoolButton.css"

function CoolButton(props) {
 return <div>
  <button className="blue">{props.first}</button>
  <button className="red">{props.sec}</button>
  </div>
}


export default CoolButton;