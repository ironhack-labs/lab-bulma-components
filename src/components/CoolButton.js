import React from "react";
import 'bulma/css/bulma.css';



function CoolButton (props) {

    const {classes, label, id} = props

    return (
        <p id={id} class="control">
            <a class={classes} >{label}</a>
        </p>
    )

}

export default CoolButton;