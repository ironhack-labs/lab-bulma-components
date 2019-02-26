import React from "react"

function CoolButton(props) {
  return <a className={"button " + props.type + " " + props.class}>{props.input}</a>
}

export default CoolButton