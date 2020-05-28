import React from "react";
import 'bulma/css/bulma.css';


function CoolButton(props){
    let htmlClasses=[]
    htmlClasses.push('button')
    if (props.isSmall) {
        htmlClasses.push("is-small")  
    }
    if(props.isPrimary)
    {
        htmlClasses.push("is-primary")
    }
    if(props.isSuccess)
    {
        htmlClasses.push("is-success")
    }
    if(props.isDanger)
    {
        htmlClasses.push("is-danger")
    }
    htmlClasses.push(props.className)
    return(
        <div>
            <button className={htmlClasses.join(' ')}>{props.children}</button>
        </div>
    );
}







export default CoolButton;