import React from "react";

const CoolButton = props => {
    let classString = "button"
    for (let key in props){
        if (String(key) === "className"){
            classString = classString + " " + props[key]
        } else if (String(key) !== "children" && String(key) !== "type"){
            let className = String(key) //"isPrimary"
            className = "is-" + className.charAt(2).toLowerCase() + className.slice(3); //"is-primary"
            classString = classString + " " + className
        } 
        
    }
    return (
        <button className={classString} type={props.type} >{props.children}</button>
    )
}

export default CoolButton