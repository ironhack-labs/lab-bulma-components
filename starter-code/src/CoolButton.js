import React from "react";



const CoolButton = (props) => {
    const classesArr = ["button", props.className];
    if (props.isSmall) {
        classesArr.push("is-small")
    if (props.isDanger){
        classesArr.push("is-danger")
    }
    if (props.isPrimary){
        classesArr.push("is-primary")
    }
    if (props.isSuccess){
        classesArr.push("is-success")
    }
    };
    const classes = classesArr.join(' ')
return (
    <button className= {classes}>{props.children}</button>
)
}



export default CoolButton;