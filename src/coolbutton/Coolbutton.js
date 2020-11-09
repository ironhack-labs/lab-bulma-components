import React from "react";
import 'bulma/css/bulma.css';

function Coolbutton(props){
    let className=`button ${props.className}`;
    if(props.isSmall){
        className += " is-small"
    }
    if(props.isSuccess){
        className += " is-success "
    }
    
    if(props.isDanger){
        className += " is-danger "
    }
    return <div>
    <button class={className}>{props.children}</button>
    </div>
}

export default Coolbutton;