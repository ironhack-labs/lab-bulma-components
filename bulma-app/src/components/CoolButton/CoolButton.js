import React from "react"

function CoolButton(props) {

    return (
        <button class={props.className}>{props.name}</button>
    )

}
export default CoolButton